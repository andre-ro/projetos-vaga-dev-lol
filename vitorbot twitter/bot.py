import tweepy
import datetime
import time

auth = tweepy.OAuthHandler("", "")
auth.set_access_token("", "")
api = tweepy.API(auth) 


try:
    api.verify_credentials()
    print("Authentication Successful")
except:
    print("Authentication Error")

while True:
    x = datetime.datetime.now()
    h = x.strftime("%H")
    # m = x.strftime("%M")
    if h >= '15':
        f = open("./dias.txt", "r")           # read file
        a = f.read()                        # a = str in txt
        f = open("dias.txt", "w")           # write file
        f.write(str(int(a)+1))              # file ++
        f.close()

        status = 'day '+a+' vitor kenzo fukuhara pelegatti bazinga' 
        api.update_with_media('vitro.jpg', status)
        
        print('updated day '+a)
        time.sleep(3600)
    else:
        print(h+'h waiting...')
        time.sleep(3600)

