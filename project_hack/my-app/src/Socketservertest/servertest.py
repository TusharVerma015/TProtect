import socket

s = socket. socket ()
host = socket. gethostname ()
port = 12345
s.bind ( (host, port))


s.listen(1)

while True:
    c, addr = s. accept ()
    
    print ('Got connection from', addr)
    output = 'Thank you for connecting'

    c.sendall (output. encode ('utf-8'))
    c.close ()
print("hey")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
print("why")
