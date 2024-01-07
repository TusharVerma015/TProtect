#!C:\Python3.9.5\python.exe
import nmap
import json



devices = []
def scan_network(network):
    scanner = (nmap. PortScanner())
    scanner.scan(hosts=network, arguments='-T4 -F')
    
    for host in scanner.all_hosts():
        print("Host: %s (%s)" % (host, scanner [host] .hostname ()))
        print("State: %s" % scanner [host].state())
        device = {
            'IP':host,
            'Services':[]
        }
        for proto in scanner [host].all_protocols ():
            print("Protocol: %s" % proto)
            device['protocol'] = proto
            lport = scanner [host][proto].keys ()
            sorted_ports = sorted(lport)
            for port in sorted_ports:
                if proto=='tcp':
                    service = scanner[host][proto][port]
                    service_info = {
                        'Port':port,
                        'Service Name':service['name'],
                        'State':service['state'],
                    }
                    device['Services'].append(service_info)
        devices.append(device)
        json_object = json.dumps(device, indent=4)
        with open("./src/sample.js", "w") as outfile:
            outfile.write("const a = " + json_object)
            outfile.write("\n")
            outfile.write("module.exports = a")
        
    return devices
# Example usage


network_to_scan = '127.0.0.1' # Replace with your network range'
network_to_scan = input("PLease enter the IP adddress to scan")

devices = scan_network(network_to_scan)

for device in devices:
    print('Device Information:')
    print(f"IP: {device[ 'IP']}")
    print('Services:')
    for service in device[ 'Services']:
        print(f" Port: {service[ 'Port' ]}")
        print(f"Service Name: {service[ 'Service Name']}")
        print (f"  State: {service[ 'State']}")
        print()