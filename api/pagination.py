from fastapi import APIRouter, Query

router = APIRouter()

products = [
    {"id": i, "name": f"Product {i}"}
    for i in range(1, 101)
]


@router.get("/products")
async def get_products(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=50)
):
    start = (page - 1) * limit
    end = start + limit

    data = products[start:end]

    return {
        "page": page,
        "limit": limit,
        "total": len(products),
        "data": data
    }
