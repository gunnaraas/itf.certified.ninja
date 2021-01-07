---
id: "ch08-networking"
title: "Ch. 08 - Networking Concepts and Technologies"
---
-	Small Office Home Office (SOHO) is a small network (Connection) of Computers with fill up a small house hold and or a small business.

# Exploring Connection Types and Features 
When it comes to connecting computers, there are two common methods of doing this, via wired and or wireless. Although both methods have many other benefits two in particular do stand out. For a wired connection speed and interference reduction stands out. For wireless, portability and ease of access stands out.

## Choosing External Network Connections 
An **Internet Service Provider (ISP)** is the service company that allows users to connect to the internet. The internet is the most common type of external connection.

### Dial-Up
**Dial-Up** requires a landline telephone connection (sometimes known as Plain Old Telephone Service or POTS) to connect to a modem to connect to the internet.
- The benefits of using dial up were: Cost ($0-10/month), Easy to set up and configure because all you need is a telephone line.
- The primary downside is that it is super slow (max speed of 56 KBps) and you can only have one computer connected at a time. The phone can also not be used while the computer is connected to the internet. 

### DSL 
**DSL** (Digital Subscriber Line) also uses phone lines to connect to the internet. In the Twin Cities metro area, CenturyLink is the primary DSL provider. 

Pros: 
- It is faster than dial-up, but slower than cable or fiber. 
- Unlike cable, you have a direct connection to your ISP and do not share bandwidth with your neighbors. 
- It is generally more reliable than other internet connection types.
- Allows multiple computers to be connected to one modem, doesn't prevent landline phones from making or receiving calls. 

Cons:
- Not as widely available as dial-up, cellular, or satellite.
- More expensive than dial-up ($40-60/month). Similar price to cable or fiber. 
- May require additional equipment (modem, router, network card), whereas DSL just requires a built-in modem.

### Cable 
- **Cable** uses a coaxial cable to connect to the modem than a telephone line. It is very difficult to distinguish data transfer speeds because there are many factors that come into consideration and they vary. In the Twin Cities metro area, Comcast (Xfinity) is the primary Cable internet provider. 

Pros: 
- Its much faster than dial-up and it much faster than DSL (particularly during uploading), no telephone line needed and it is very reliable.

Cons: 
- It requires more hardware to set-up such as Network card, a network cable and a cable modem (which you are charged monthly to lease the modem), your band width is shared with others in your neighborhood and the cost is higher with Lower speeds starting around 20-30 dollars per month and the advertised running at $100 or more.  

### Fiber 
**Fiber-Optic** internet connects transmit data as bursts of light through glass or plastic *fibers* (hairs or strings), allowing your data to be transmitted at the speed of light. This gives users very high bandwidth, low latency connections. The primary Fiber providers in the Twin Cities metro area are US Internet and CenturyLink. 

Pros: 
- Most bandwidth available from any internet connection type, usually 1+ Gigabit per second, allowing for large files to be downloaded or uploaded very quickly. 
- Lowest latency (time to communicate between your computer and the server), making it great for time sensitive applications like video conferencing and online gaming. 
- Usually more reliable than other options, because the infrastructure and technology is newer. 

Cons: 
- Limited availability: Fiber internet is generally only available in wealthier neighborhoods of densely populated cities (e.g. Uptown Minneapolis).
- Cost: The monthly fee to get fiber optic internet access can be more than Cable or DSL (but not always). In addition, your computer and other devices may need an upgrade to benefit from the full speed available on the connection.   

### Satellite 
**Satellite Internet** uses satellite dishes to connect you to the internet, sending and receiving data to and from from an orbiting satellite and relay station that is connected to the internet. New technologies (like Starlink) are making satellite internet a more usable experience, but currently the best use of satellite technology is point-to-multipoint communications (satellite TV and radio), where many people are receiving the same data, instead of personal internet use.  

Pros: 
- Satellite internet is available almost* anywhere with a view of the sky, allowing you to connect to the internet from very remote locations (including ships in the middle of the ocean). * Satellite access is limited near the North and South poles. 

Cons: 
- Due to the distance your data needs to travel (to space and back to Earth), satellite connections are very high latency. Bandwidth is also fairly limited. Online gaming and streaming videos is a bad experience on a satellite connection. 
- Satellite internet can be very expensive, and often comes with strict bandwidth caps (example: you can only use 50GB of data a month.)

### Cellular 
**Cellular Networking** is what allows us to connect to the internet from mobile devices (smartphones and tablets), which was once something that was only available on computers.
- Cellular Technical Specifications has major standards that are used around the world, which include the Global System for Mobile Communications (GSM) and Code Division Multiple Access (CDMA).
    - GSM is the most popular, boasting more than 1.5 billion users in 210 countries. If the phone uses a SIM card, it is likely using the GSM standard*. AT&T and T-Mobile are two GSM carriers in the United States. 
    - CDMA is only used in the United States by Verizon and Sprint. With CDMA, the phone has a unique identifier that must be registered with your cellular provider before it can connect to the cellular network. 
    - Note: 4G LTE and 5G phones on CDMA networks now use SIM cards as well. 

GSM and CDMA use different radios to communicate with the cellular network, meaning if you had a GSM phone, you usually can't switch to a CMDA provider and keep the same device (iPhones and some others include both radios).

- Mobile Hotspots are devices or network cards that are designed to allow computers and other non-cellular devices to access cellular networks.

### RF
- Radio Frequency Internet (noncellular-wireless) is a broadband Internet access, that is least popular connection. A service provider uses a transmitter to broadcast a signal and a customer would have a radio receiver at the other end to pick up the signal. The receiver is then connected to a router or computer in a similar fashion as cable or DSL. It cost more than a wired connection for speeds similar to a wired connection. RF internet connections are useful in rural areas where it may be cost prohibitive to build a wired connection between distant homes.  

## Choosing Internal Network Connections 

### Wired Network Connections 
Wired Network Connections form the backbone of nearly every network. Wired networks are faster and more secure than their wireless counterparts. There are two choices of connection types when it comes to wired connections: unshielded twisted pair (UTP), also known as Ethernet, and Fiber-optic.

- Unshielded twisted pair (UTP): is a copper wired cable that transmits electrical pulses. It is mildly secure and susceptible to interception (wiretapping) and electromagnetic interference. Although it cost less that its Fiber optic counterpart.

- Fiber-Optic: is a wire made of glass or plastic and transmits signals using light. Is extremely secure resistant towards wiretapping and electromagnetic interference. It is more expensive than its Copper wired counterpart to set-up and can cover long distances.
Both forms of wired connections require than the user also purchase the equipment that goes along with the wire i.e. the correct network cards, cables, location in which to connect the devices, etc. When configuring a wired network, you want to think about the speed, distance and cost.

### Wireless Network Connections 
Wireless Network Connections are convenient, which is the number one reason to why people prefer them over wired connections, however they are a bit more expensive than their wired copper counterparts. Wireless is slower and less reliable than a wired connection, and connection quality can be impacted by mechanical and environmental interference. There are also security concerns with wireless connections, as attackers do not need direct physical access to your hardware to enter your network. 

- **Wireless LAN (WLAN)**, or **Wi-Fi**, is governed by the IEEE 802.11 standard. These rules set standard speeds, distances, and ensure that all Wi-Fi devices adhering to the standard are compatible with a signal standard. When determining this connection, you must consider, speed, security, distance and cost. It is best to start with the most robust wireless technology because it is backward compatible with the previous versions of 802.11a/b/g/n.

#### 802.11 Standards 

| Name | Max Speed | Frequency | Distance (Indoors) | Distance (Outdoors)|
|------|-----------|-----------|--------------------|--------------------|
| 802.11a  |  52 Mbit/s | 5 GHz | 35 m | 120 m |
| 802.11b  |  11 Mbit/s | 2.4 GHz | 35 m | 140 m |   
| 802.11g  |  54 Mbit/s | 2.4 GHz | 38 m | 140 m | 
| 802.11n  |  600 Mbit/s  | 2.4 and 5 GHz | 70 m | 250 m | 
| 802.11ac |  800 Mbit/s | 5 GHz | 35 m | 120 m | 
| 802.11ax |  2.5-10 Gbit/s* | 2.4, 5, and 6 GHz | 30 m | 120 m | 

*802.11ax (Wi-Fi 6) is still being developed, these speeds are theoretical. 

- **Bluetooth** is designed for a Wireless Personal Area Network (WPAN), or a network of devices used by one user or one device. While not appropriate for a network consisting of multiple users devices, it is perfect for connecting devices such as smartwatches, mice, keyboards, headsets and printers (in close proximity).

- **Infrared** is a connection created through waves, these waves are longer than light and shorter than microwaves. This requires a line of sight between the two devices, and is what is used for a TV remote. Some older portable devices (think PocketPC, PDAs) would use this to transfer files between devices. Other technologies, like AirDrop, have largely replaced Infrared. 

# Understanding Network Connectivity Essentials
There are two components to understanding network connectivity, the first is hardware, which is the devices used to connect computing devices to the network and the second is using protocols, or the languages that computer use to communicate with each other on a network. Another thing to also consider would be methods of storing data through the network.

## Common Networking Devices
- **Modem** is a combination of the words modulate (convert from digital to analog) and demodulate (convert from analog to digital). Modems are used to connect to a network via cable or telephone lines, which are only capable of transmitting data in the analog format. 
- **Routers** connect multiple networks together, and help data flow clearly between networks. A router is the most essential part of any network.  
- A **Network Switch** is a device that allows us to connect multiple wired Ethernet connections to the network. Switches examine the header (metadata) of incoming data packets and forward it properly to the right port and only to that port by using the MAC address of the device. 
    - Like a switch, a **Network Hub** connects multiple wired devices together. However, hubs do not determine which device a data packet is intended for, it instead copies that packet and sends it to all connected devices. Network hubs can seriously slow down a network, and are not used in modern networking.  
- **Access Points** are devices that Wi-Fi devices communicate with in order to connect with the network. 

### Firewalls
- Firewalls are the gatekeepers that protect your network from hackers and malware.
- Firewalls filter incoming and outgoing traffic of your network depending on rules set by the Access Control List. This is a list of rules or conditions on what traffic is allowed to enter or leave the network.
- Firewalls can be software-base, hardware-based or a combination of both
    - Host-based: protects only one computer and are almost always software solutions. Windows Defender Firewall is an example of a host-based firewall found on all Windows computers.
    - Network-based: Protects the entire network. This is usually it's own device, found in larger networks, but can also be software running on the router.  
        - The **Demilitarized Zone (DMZ)** is a space between two firewalls, or the port used to connect servers that can be considered both public and private. You might put a server in the DMZ if you want it to be accessible from outside the network without opening up other connected devices to potential attacks. 

## Networking Protocols Basics
Networking protocols are a lot like human languages in that they are the languages that computers speak when talking to each other. Although there are many different protocols, the most popular protocol has been TCP/IP because it is the protocol that was used for the internet.
- Protocol is a set of rules that govern communications.

## TCP/IP Essentials
Computers must follow rules for them to communicate effectively. The Department of Defense created the DoD Model which has 4 layers that specify the tasks that need to happen: Process/Application, Host-to-Host, Internet, and Network Access.
- Understanding IP Addressing helps understand how our devices communicate and identify each other on the network.
- IP Address is a 32-Bit hierarchical address that identifies a HOST (device) on a network. i.e. 192.168.10.55
- Host is any device that is assigned an IP address to it.
- Network ID: Are the set of numbers that Identify the network that devices connect to.
- Host ID: Are the set of numbers that identify the device within the network.
- Subnet Mask: Is how computers tell the different between the Network ID and HOST ID.
- Default Gateway: It the ability of the router to stand as the door between the internal network and the outside world.
- DHCP and DNS stands for Dynamic Host Configuration Protocol (DHCP) and Domain Name System (DNS).
- DHCP: Can be configured to provide (assign) IP configuration information automatically to clients (HOST) or have the Administrator configure this themselves by assigning a Static IP Address.
- DNS: Assigns an IP address to a domain name, making it easy for the navigator to simply enter address text rather than memorizing the IP address. i.e. converting www.google.com to 72.14.205.104.
- Static IP Addressing is the process in which the system Administrator assigns IP addresses manually to each HOST.
- Uniform Resource Locator a location or address identifying where documents can be found on the internet.
- Automatic Private IP Addressing is a computer that automatically assigns itself an IP address and cannot connect to the Internet.
- Public vs. Private IP Address
- Public IP: Connects to the Internet and Routable.
- Private IP: Local IP, doesn’t connect to the Internet and is nonroutable.
- Network Address Translation (NAT): is the system that uses the router’s IP address as Public to send and receive data to and from the Internet, while your HOST device is given a Private IP address for your Internal network.

## Network Storage Options
There are many different types of networks to storage options to connect to, examples	include file servers, NAS and Cloud Storage.
- Local Network Storage are made of two types File serve and Network-Attached Storage.
- File Server is a computer that is specialized to store user files.
- Network-Attached Storage is storage device that is attached to the network interface card.
- Redundant Array of Independent Disks (RAID) is a configuration that is used for network-based storage devices, which provides fault-tolerance services.
- Cloud Storage Services is much easier to work with than the other network-based storage types, those include; you don’t need to buy hardware and it is easy to configure or install.

# Setting Up a Wireless Network
It can be daunting when configuring a wireless Network, but it has become relatively easy of a task to configure and create connection. Most routers bought today come with wireless capability and have a four wire ports available not only for wired connectivity, but to also configure the router itself. Wireless router manufactures use different software, but you can usually configure their parameters with the built-in, web-based configuration utility that’s included with the product.

## Basic Configuration
The Wi-Fi Alliance is the authorized expert in the field of wireless LANs.
1. Accept the License Agreement is the process in which you complete the EUSA and register your router when installing the drivers or the software that the router comes with before initiating router configuration.
2. Connect the Router which would check see or verify if the router is capable to connect to the outside world. If there is an error message make sure that the router is powered and all basic troubleshooting steps have been taken e.g. router is connected to the ISP port on your house hold wall.
3. Finish Basic Configuration will have the software determine if your router is working and if the default configurations are all set. During this process, you will also configure the what security parameters that you want to incorporate on your router.
4. Secure the Network by changing the SSID from default, set security Protocol (WEP, WPA and WPA2) and finally Apply a new wireless password.
     - **Service Set Identifier (SSID)** is a unique name that is given to the wireless network, which the user can rename to identify their network.
     - **Passphrase** is the part were the user will issue a pass word for the network, which other users will use to connect to that network.
5. Change the Administrator password and Update Firmware is important and should be done before exiting the configuration.  The admin password should not be the same as the wireless passphrase, this reduces security vulnerabilities within the system. Unless necessary, firmware should be updated only if the device is not working properly.
6. Connect to the Network and Verify Internet Connectivity is done by checking if the wireless signal is being transmitted by the router through the devices network settings. [It’s important to note that mobile devices have the capabilities to connect to your router, meaning they should have a wireless receiver to pick up the signal.]

## Wireless Router Security
- Open Portals provide potential users, access to a network without the need to enter a password. This may not be as secure because it may allow any wireless users to be able to connect to the network.
- Captive portal is a type of open portal in which the user connecting to that network, is taken to a welcome page notifying the user of the conditions of the networks including which behaviors are permitted.
- WEP Wired Equivalency Protocol, provided data transmission security, by providing the client a static key (Password) in order to communicate with a WEP-enabled device. WEP is vulnerable because of the nature of the static keys and weaknesses in the encryption algorithms.
- WPA Wi-Fi Protected Access is an improvement over WEP, it followed the Temporal Key Integrity Protocol which used 128-bit and each packet is Dynamically allocated this type of key.
- Temporal Key Integrity Protocol (TKIP) is an encryption protocol included as part of the IEEE 802.11i standard for wireless LANs (WLANs). This standard that was capable of allocating 128-bit Keys dynamically to each packet that being transmitted through wireless LAN.
- WPA2 Wi-Fi Protected Access 2, made huge improvements over the WEP and WPA by implementing the Counter Mode CBC-MAC Protocol (CCMP), which is a protocol based on the Advance Encryption Standard (AES) algorithm.
- Advance Encryption Standard (AES) is a symmetric block cipher chosen by the U.S Government to protect classified information and is implemented in software and hardware throughout the world to encrypt sensitive data.

## Additional Wireless Router Services
- Guest Access is for clients who need Internet access but aren’t allowed to see the rest of the network. Guest clients will need to know the SSID of the guest network and the password.
- DHCP Dynamic Host Configuration Protocol automatically configures clients with IP addresses, this can be enabled by your router’s configuration options.
- NAT Network Address Translation, allows you to use a private IP address internally but still get to the Internet. Basically it helps translate traffic coming from the internet identify the a local area network by assigning an Internet based IP to a internal LAN IP.
- QoS Quality of Service is a strategy that allows an administrator to control resources, by setting different priorities for one or more types of network traffic based on different applications, data flows or users, this is typically meant for WANs not really for SOHO LANs.
- Firewall are the software based security rules that can be configured to set internet access policy and blocking protocols such as HTTP, FTP, etc., along with limiting internet access times and implementing parental controls.

# Summary
In summary we discussed the hardware tools that are required to establish a connection and how to secure that network. Depending on the network choice, that will determine how secure your network would be and what would be required by other devices to connect to that network.
