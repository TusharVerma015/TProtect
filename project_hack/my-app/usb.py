import time
import psutil
import os
def get_connected_usb_devices():
    devices = []
    for device in psutil.disk_partitions():
        if 'removable' in device.opts:
            devices.append(device.device)
    return devices

def main():
    previous_devices = set()
    
   
    connected_devices = get_connected_usb_devices()
    new_devices = set()
    new_devices = set(connected_devices) - set(previous_devices)
    
    if new_devices:
        print("New devices connected:")
        print(connected_devices)
        for device in new_devices:
            
                
            print(device)
        
    
    previous_devices = connected_devices
        

if __name__ == "__main__":
    print(get_connected_usb_devices())
    main()
    os.system("python ./src/malware_scanner.py")