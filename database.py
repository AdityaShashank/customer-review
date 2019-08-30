import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:8100/customer/tabs")
mydb = myclient["mydatabase"]
mycol = mydb["customers"]

x = mycol.find_one()

print(x)
