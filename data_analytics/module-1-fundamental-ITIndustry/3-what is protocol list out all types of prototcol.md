# What Is a Protocol?

A **protocol** is an agreed set of rules that devices or software use to communicate. Protocols specify how messages are formatted, sent, received, and sometimes secured. They help different systems exchange information reliably.

For example, when you open a website, your device may use DNS to find the website's address, HTTPS to request its pages securely, and TCP or QUIC to transport information across the network.

## Common Types of Network Protocols

There are many protocols, including specialized and newer ones, so this is a list of widely used examples rather than every protocol that exists. Protocols often work together at different layers of a network.

### 1. Web and Application Protocols

- **HTTP (Hypertext Transfer Protocol):** Transfers web pages and other resources.
- **HTTPS (HTTP Secure):** HTTP protected with TLS encryption.
- **WebSocket:** Supports ongoing, two-way communication between a client and server.
- **DNS (Domain Name System):** Finds the IP address associated with a domain name, such as `example.com`.
- **DHCP (Dynamic Host Configuration Protocol):** Automatically provides devices with network settings, often including an IP address.

### 2. File Transfer Protocols

- **FTP (File Transfer Protocol):** Transfers files; by itself, it does not encrypt the connection.
- **FTPS:** FTP protected using TLS.
- **SFTP (SSH File Transfer Protocol):** Transfers and manages files over SSH. It is a separate protocol from FTP.
- **TFTP (Trivial File Transfer Protocol):** A simpler file-transfer protocol often used in local networks and device setup.

### 3. Email Protocols

- **SMTP (Simple Mail Transfer Protocol):** Sends and relays email.
- **IMAP (Internet Message Access Protocol):** Lets users access and manage email stored on a mail server.
- **POP3 (Post Office Protocol version 3):** Retrieves email from a mail server, commonly by downloading messages to a device.

### 4. Transport Protocols

- **TCP (Transmission Control Protocol):** Provides ordered, reliable delivery of data between applications.
- **UDP (User Datagram Protocol):** Sends data with less delivery overhead; applications handle any needed reliability.
- **QUIC:** A modern transport protocol that supports secure, low-latency connections; HTTP/3 uses QUIC.

### 5. Internet and Network Protocols

- **IP (Internet Protocol):** Addresses and routes packets between networks. The main versions are **IPv4** and **IPv6**.
- **ICMP (Internet Control Message Protocol):** Carries network status and error messages; tools such as `ping` commonly use it.
- **IGMP (Internet Group Management Protocol):** Manages IPv4 multicast group membership.
- **ARP (Address Resolution Protocol):** Finds the link-layer address associated with an IPv4 address on a local network.
- **NDP (Neighbor Discovery Protocol):** Provides functions such as address discovery on IPv6 local networks.

### 6. Local Network and Link Protocols

- **Ethernet (IEEE 802.3):** Common wired local-area network technology.
- **Wi-Fi (IEEE 802.11):** Family of wireless local-area networking standards.
- **PPP (Point-to-Point Protocol):** Carries network traffic over direct connections between two points.

### 7. Routing Protocols

Routers use routing protocols to share information about paths through networks.

- **BGP (Border Gateway Protocol):** Exchanges routing information between large independent networks on the internet.
- **OSPF (Open Shortest Path First):** Shares routes within an organization or other autonomous system.
- **RIP (Routing Information Protocol):** A simpler routing protocol used in some smaller or legacy networks.

### 8. Security and Remote-Access Protocols

- **TLS (Transport Layer Security):** Protects communication with encryption and helps verify the communicating parties.
- **SSH (Secure Shell):** Provides secure remote login and command execution.
- **Telnet:** Provides remote command-line access but does not encrypt traffic; SSH is generally preferred.
- **IPsec (Internet Protocol Security):** Protects IP traffic and is commonly used in virtual private networks (VPNs).

### 9. Network Management and Time Protocols

- **SNMP (Simple Network Management Protocol):** Monitors and manages network devices.
- **NTP (Network Time Protocol):** Synchronizes clocks on computers and other devices.

### 10. Voice, Messaging, and IoT Protocols

- **SIP (Session Initiation Protocol):** Starts, manages, and ends voice or video communication sessions.
- **RTP (Real-time Transport Protocol):** Carries audio and video in real-time applications.
- **MQTT:** Lightweight messaging protocol often used by Internet of Things (IoT) devices.
- **CoAP (Constrained Application Protocol):** Designed for communication with resource-limited devices.
- **AMQP (Advanced Message Queuing Protocol):** Supports reliable message exchange between applications.

## How Protocols Work Together

Protocols are commonly organized into layers. An application protocol such as HTTP defines the kind of information being exchanged; a transport protocol such as TCP or QUIC carries it between applications; and IP routes packets between networks. Link technologies such as Ethernet or Wi-Fi carry data across the local connection.

**In short:** protocols are communication rules. Different protocols handle different tasks, and devices combine them to communicate over networks and the internet.