import json
from datetime import datetime, timedelta
data = '''
[
    {
      "LeadgenID": "3807711036143434",
      "created_time": "2024-08-16 15:12:40"
    },
    {
      "LeadgenID": "907026628115000",
      "created_time": "2024-08-16 00:49:35"
    },
    {
      "LeadgenID": "874997091189898",
      "created_time": "2024-08-16 00:25:12"
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
'''
# JSON data ko load karna
leadgen_data = json.loads(data)
# Kal ki date ko nikaalna
yesterday_date = (datetime.utcnow() - timedelta(days=1)).strftime('%Y-%m-%d')
# Kal ki date ke data ko filter karna
yesterday_data_count = sum(1 for lead in leadgen_data if lead['created_time'].startswith(yesterday_date))
print(f"Kal ki date ke data ki sankhya: {yesterday_data_count}")


import json
from datetime import datetime, timedelta
data = '''
[
    {
      "LeadgenID": "3807711036143434",
      "created_time": "2024-08-16 15:12:40"
    },
    {
      "LeadgenID": "907026628115000",
      "created_time": "2024-08-16 00:49:35"
    },
    {
      "LeadgenID": "874997091189898",
      "created_time": "2024-08-16 00:25:12"
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
'''
leadgen_data = json.loads(data)
Date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
Date_count = sum(1 for lead in leadgen_data if lead['created_time'].startswith(Date))
print(f"Total number of date: {Date_count}")