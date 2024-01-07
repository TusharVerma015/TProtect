import psutil
import os
import json
user_list = psutil.users()
dictt = {}
for user in user_list:
    username = user.name
    dictt['Username'] = username
    name = os.name
    if(name=="nt"):
        name = 'Windows NT'
    dictt['Os'] = name
jsObject = json.dumps(dictt,indent=4)
with open("./src/backdoor.json",'w') as f:
    f.write(jsObject)