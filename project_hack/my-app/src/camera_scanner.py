import os
import re
import json
# Define a list of keywords that might indicate vulnerabilities
dictt = {"connection":True}
vulnerable_keywords = [
    "backdoor",
    "exploit",
    "malware",
    "virus",
    "password",
    # Add more keywords relevant to driver vulnerabilities
]

# Function to scan a file for vulnerable keywords
def scan_file_for_vulnerabilities(file_path):
    try:
        with open(file_path, 'r', errors='replace') as file:
            content = file.read()
            for keyword in vulnerable_keywords:
                if re.search(r'\b{}\b'.format(re.escape(keyword)), content, re.IGNORECASE):
                    return True
    except Exception as e:
        print(f"Error while scanning {file_path}: {e}")
    return False

# Function to scan a list of driver files
def scan_driver_files(file_paths):
    vulnerabilities_found = False
    for file_path in file_paths:
        if scan_file_for_vulnerabilities(file_path):
            vulnerabilities_found = True
            print(f"Potential vulnerability found in {file_path}")
            dictt['vfound']=True
    return vulnerabilities_found

# Function to detect connected USB devices
def detect_usb_devices():
    
    try:

     connected_devices = os.listdir('/dev')
     usb_devices = [device for device in connected_devices if 'usb' in device]
     return usb_devices
    except FileNotFoundError as e:
        print("Device not connected")
        dictt['deviceNotConnected'] = True
    

# Main function
def main():
    print("Scanning connected USB devices for vulnerabilities and transferring files...")
    
    connected_devices = detect_usb_devices()
    if not connected_devices:
        print("No USB devices are currently connected.")
        dictt["noDeviceConnected"] = True
        return
    
    for device in connected_devices:
        print(f"A USB device is connected: {device}")
        dictt["noDeviceConnected"] = False
        # Continue with the file transfer process for each connected device
        # Replace this part with your actual file transfer logic
        
        # Example file transfer logic
        source_file = "/path/to/your/source/file.txt"
        destination_path = f"/media/{device}/"
        os.system(f"cp {source_file} {destination_path}")
        print(f"File transferred to {destination_path}")

        driver_files = [f"C:/Users/LENOVO/OneDrive/Desktop/WdmCompanionFilter.sys/{device}.inf"]
        vulnerabilities_found = scan_driver_files(driver_files)
        if not vulnerabilities_found:
            print("No vulnerabilities found.")
            dictt['vfound'] = False

        print()  # Add an empty line for separation

if __name__ == "__main__":
    main()
    with open("./src/camera_vul.json",'w') as f:
        js = json.dumps(dictt,indent=4)
        f.write(js)