from fastapi import APIRouter

router = APIRouter()

products = [
    {"id": 1, "name": "iPhone", "price": 800},
    {"id": 2, "name": "Samsung", "price": 600},
    {"id": 3, "name": "Pixel", "price": 700},
    {"id": 4, "name": "OnePlus", "price": 400},
]


@router.get("/products/search")
async def search_products(
    q: str | None = None,
    min_price: int | None = None,
    max_price: int | None = None,
    sort: str = "price"
):
    result = products.copy()

    if q:
        result = [
            product
            for product in result
            if q.lower() in product["name"].lower()
        ]

    if min_price is not None:
        result = [
            product
            for product in result
            if product["price"] >= min_price
        ]

    if max_price is not None:
        result = [
            product
            for product in result
            if product["price"] <= max_price
        ]

    result.sort(
        key=lambda product: product[sort]
        if sort in ["price", "name"]
        else product["id"]
    )

    return result
