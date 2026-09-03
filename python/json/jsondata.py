
import json
from datetime import datetime


data = [
    {
        "LeadgenID": "3807711036143434",
        "created_time": "2024-08-20 15:12:40"
    },
    {
        "LeadgenID": "907026628115000",
        "created_time": "2024-08-20 00:49:35"
    },
    {
        "LeadgenID": "874997091189898",
        "created_time": "2024-08-20 00:25:12"
    },
    {
        "LeadgenID": "515829294158795",
        "created_time": "2024-08-15 22:16:08"
    },
    {
        "LeadgenID": "1501438320475000",
        "created_time": "2024-08-15 20:50:09"
    }
]


target_date = "2024-08-20"


filtered_data = [item for item in data if item['created_time'].startswith(target_date)]


#print(json.dumps(filtered_data, indent=2))
print("total lenth is:",len(filtered_data))
