---
id: "ch09-securityconcepts"
title: "Ch. 09 - Security Concepts and Threats"
---
Information Security is of utmost importance to IT professionals. As hackers and other security threats become an increasingly common issue in our world protecting private personal, customer, and company information should be a top priority for all of us. In this chapter, we learn about the many different data security threats we face, the three areas we need to protect (confidentiality, integrity, and availability), and frameworks IT professionals can use to control access to resources.  

## Understanding Hackers and Motives 
Originally, a *hacker* simply referred to someone who was good with computers, but now refers to someone who uses computers with malicious intent. Today, *hacking* is the act of bypassing safeguards that prevent unauthorized access to a computer system, network, or it's data. While not always bad - the term does have a negative connotation. 

Hackers might have many motivations for hacking, including but not limited to: 
- **Financial incentives:** accessing valuable private information that can be sold to a third party, accessing bank accounts to steal money electronically, [encrypting important data and demanding a random is paid for the decryption key](https://en.wikipedia.org/wiki/Ransomware), or creating hacks for sale to less skilled hackers.  
- **Political or ideological reasons:** Hacking government agencies or private organizations for political reasons, as a form of activism (see: [hacktivism](https://en.wikipedia.org/wiki/Hacktivism)), or to wage [cyberwarfare](https://en.wikipedia.org/wiki/Cyberwarfare). 
- **Bypassing restrictions or enabling features:** allowing unapproved third-party software to be installed (jailbreaking), bypassing digital rights management (DRM) [to enable software piracy](https://en.wikipedia.org/wiki/Software_cracking), or installing custom firmware allowing users to continue using a device after the original developer has stopped supporting it.  
- **For fun:** Some hackers just hack for the challenge, seeing hacking as a puzzle that can be solved, or to become better at computer programming. 

### Data as a Driver of Business Decisions 
Companies collect and use data to improve their business or have insights which would allow them to have an advantage over their competitors. Some companies, especially ones in the financial industry (banks) are required to keep certain data to remain compliant with government regulations. The information must be protected from unauthorized parties to remain valuable and to protect user privacy. 

When a individual or a company invents something, there are a number of **intellectual property** protections that can be used to protect their exclusive right to profit from it for a set period of time.  
- **Trademarks**: are words or symbols legally registered as representing a company or product. Examples include: The Apple logo, or Nike's "Just Do It" slogan.
- **Copyright**: is legal protection for original works of authorship (songs, plays, movies, computer applications and more).
- **Patents**: are legal protections that signify the ownership of an invention (a type of machine, process, formula, or product) for a limited time.

In the 21st century, many companies exist without producing any physical products. Instead - they produce intangible **digital products**, like computer software, online videos, and websites. These are given the same intellectual property protections given to physical goods.  

## Understanding Security Threats
If you're doing anything important on your computer, it's important to know how to keep your devices and networks secure. To do this effectively, you need to understand the possible threats so you can identify suspicious activity and take action. 

Information Security experts divide security threats into three areas: *Confidentiality*, *Integrity*, and *Availability*. We often refer to this as the **CIA Triad**. All sides of the triad must be protected for us to remain secure. 

![The CIA Triad](/assets/images/ch09-ciatriad.png)

### Confidentiality Concerns
One of the most important concerns for security professionals is to protect *confidentiality*, or ensuring that private information remains private and inaccessible to unauthorized individuals. There are many different ways confidentiality can be attacked, including snooping, eavesdropping, wiretapping, social engineering, and dumpster diving. 

#### Snooping 
Snooping (sometimes called "sniffing") is the practice of a hacker capturing network traffic, then searching for private information or information that allows them to initiate a deeper attack. This is accomplished through the use of a protocol analyzer (sometimes called a packet sniffer) like [Wireshark](https://www.wireshark.org/). These tools are often used by networking professionals to troubleshoot network issues, but can also be used by hackers to gain important information. 

Using a secure encrypted network, only allowing trusted devices to connect to private networks, and only entering private information to websites that use HTTPS encryption can prevent hackers from collecting your personal information by snooping.  

![Screenshot of Wireshark snooping software](/assets/images/ch09-wireshark.jpg)

#### Eavesdropping 
Eavesdropping the act of listening to a conversation to gain key information. These can include low-tech (low-level) methods, like standing within listening distance to a private conversation or phone call, and high-tech (high-level) methods, like using hidden video cameras and microphones to capture important information. 

Being aware of your surroundings before sharing sensitive information and limiting access to conference and meeting rooms can limit the risks of eavesdropping. Very sensitive conversations might require the use of special tools that can identify hidden cameras and microphones. 

![Eavedropping example](/assets/images/ch09-eavesdropping.jpg)

#### Wiretapping 
Wiretapping is the unauthorized monitoring of communications between two parties. While this historically referred to listening into conversations on landline telephones (by physically tapping into the phone line), wiretapping is also possible on cell phones and VOIP technology like Skype and Zoom. 

![Wiretapping example](/assets/images/ch09-wiretapping.jpg)

#### Social Engineering 
Social Engineering is one of the most common confidentiality threats in the organizations today. Rather than exploiting security holes in software and networks, social engineering hackers exploit individuals desire to be helpful in giving private information to the hacker. An example of this would be a "co-worker" who is working remotely calling and asking for information or access to the network. 

This scene from the 1995 classic "Hackers" shows how a social engineering hack might happen: 

<iframe width="720" height="500" src="https://www.youtube.com/embed/_G3NT91AWUE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The best way to protect against social engineering attacks is to follow security protocols before giving out protected information, verifying users identities when they call or email for help, and continued training of frontline support employees. 

#### Phishing 
Phishing attacks are emails that appear to be sent from a legitimate source that are trying to trick you into giving the hacker personal information. An example is an email that appears to come from your bank, email provider, or HR department that includes a link to a fake but convincing website - asking you to enter your login information before taking action. When you enter your information, the hackers log in as you, change your password, and steal your information. 

Phishing attacks are usually sent en-mass, but sometimes target specific users:
- Spear Phishing the attacker uses information that the target would be less likely to question because it appears to be coming from a trusted source (an email from your boss). 
- Whaling is when the attacker targets a powerful person from whom they can gain all of the data they want e.g. a manager or business owner.

To prevent being victim to a phishing attack, always make sure that the email is coming from the right website (a hacker might use g0og1e.com to trick people into thinking it's an email from Google). If you receive an email saying you need to reset your password, go directly to the site instead of following the link. If you receive a phone call from your bank asking for your security questions, hang up and call a number you know is real (from their website, the back of your credit card, etc.).

![Identifying a phishing email](/assets/images/ch09-phishing.png)

#### Shoulder Surfing 
![Shoulder surfing](/assets/images/ch09-shouldersurfing.png)

Shoulder Surfing is when an attacker "looks over your shoulder" to watch you enter sensitive information. This can be a low-tech attack (standing behind you) or a high-tech method (using cameras). 

You can protect yourself by being aware of your surroundings, covering the keypad when entering a PIN at an ATM or on your phone, or using a *privacy filter* (a screen protector that sits over your screen, making it appear off unless your looking straight at it, see below): 

![Privacy filter](/assets/images/ch09-privacyfilter.jpg)

#### Dumpster Diving 
Dumpster Diving is when a hacker goes through the dumpers, or a user’s garbage, to steal private information that has been thrown away. The best way to avoid this attack is to shred all papers in a good shredder and securely erase or destroy storage devices before throwing away or recycling them.

![Dumpster Diving](/assets/images/ch09-dumpsterdiving.jpg)

### Integrity Concerns
When users access data, they have the expectation that the data is correct and from a valid source. Integrity means that the data is accurate and consistent and from the indicated source. There are 4 threats to data integrity which are: man-in-the-middle, replay attacks, impersonation and unauthorized information alteration.

#### Man-in-the-Middle Attacks 
Man-in-the-Middle attacks involve the hacker getting the middle of your computer and the server you're communicating with, and capturing or altering the information that is transferred. This can include stealing your private information, tricking you into installing malware from a source you believe is trusted, and sending malicious data so that it appears it is coming from you. 

The best way to prevent Man-in-the-Middle attacks is to use encrypted networks, only transmit sensitive information over HTTPS, and using a VPN when connected to a network you can't verify the security of. 

#### Replay Attacks 
In replay attacks, the hacker captures data you send (most commonly, the data that logs you into a service) with the intention of replaying that data later, so the hacker can sign in as you from their device. 

The best way to avoid replay attacks is to use encrypted networks, only sign-in using HTTPS, and to set up 2-Factor Authentication codes, so that the sign-in information you use is only valid for a short period of time. 

#### Impersonation 
Hackers often employ impersonation to make you think that they're someone they're not. IP addresses, phone numbers, and email addresses can be spoofed (changed) to hide the true identity of a communication. 

To protect against impersonation, never give out personal or sensitive information without first verifying who you're communicating with.

#### Unauthorized Information Alteration 
Hackers are not always trying to steal information, instead, some will try to change the information in a system to cause damage or embarrassment. For example: hackers may try to hack into a database and change records, or hack a webserver with the intention of vandalizing it (replacing it's content with something else).

### Availability Concerns
Some hackers simply want to make it so that no one can access data. Of course, our data isn't very useful if we're not able to access it! This can include both permanent and temporary restrictions to data availability. 

#### Denial of Service 
Denial of Service (DoS) attacks are a common threat to web servers. In a DoS attack, the attacker directs their computer to attack a server by sending thousands of requests per second. When this happens, the server experiences a digital "traffic jam", preventing legitimate visitors from accessing the website. 

When this happens, it's fairly easy to identify the attacker and block their connections. To combat this, hackers usually now use DDoS attacks (Distributed Denial of Service), where malware-infected internet connected devices (called "bots" or "zombies") are directed towards a DoS target. These "botnets" can include millions of devices, making it much harder to identify and block malicious traffic. 

One way to protect your servers from DDoS attacks is to use software like [Cloudflare](https://cloudflare.com), which analyzes all traffic connecting to your server. When Cloudflare detects a DDoS attack, it requires suspicious connections solve a Captcha puzzle before connecting.  

#### Service Outage
If your servers don't have power or a internet connection, they won't be very useful. While it's unlikely hackers will attack your power infrastructure to take you offline, natural disasters or temporary power outages are also an availability issue. 

To keep servers running when power is inconsistent, most servers are protected by a **Uninterruptible Power Supply (UPS)**. A UPS is a large battery that keeps the server online for a short period of time while power is restored. Larger data centers might also have backup generators that can be used in the event of long-term power outages. 

To protect against internet outages, most critical servers will be connected to multiple different ISPs to prevent a single point of failure. 

#### Hardware Concerns 
We also need to prevent hardware from being damaged or stolen. Not only does this cost money to repair or replace equipment, but there is also the risk of data loss and unavailability. 

To prevent hardware from being damaged (for example: from a disgruntled employee), keeping critical devices in locked, secure environments is key. To prevent theft - using K-Locks (see [Ch. 03](/docs/ch03-devices)) will help devices remain in their location. Encrypting hard drives ensures that data on stolen devices can not be read. 

### Software-Based Security Threats
The biggest security threat is that of malicious software. IT professionals use the term *malware* to describe any software designed to do harm to your computer. This includes Viruses, Worms, Trojans, Rootkits, and more. Always running updated anti-malware software is a crucial protection against malware threats. 

#### Types of Malware 
There are many types of malware. By knowing the key characteristics of malware, you'll be better equipped to identify and prevent software-based security threats on your system. 

- **Viruses:** malicious executable files (.exe) that must be run by the user before doing harm to the system. 
- **Worms:** malicious software that is able to inflict damage to the system without user interaction. Worms exploit vulnerabilities in the operating system to quickly spread between devices on a network. 
- **Trojans:** just like the [Trojan Horse of Troy](https://en.wikipedia.org/wiki/Trojan_Horse), a trojan malware pretends to be a useful piece of software that also includes malware.   
- **Rootkits:** are one of the most dangerous types of malware. These embed themselves into the root of your system, have full control over the system, and are difficult for anti-malware software to detect and remove. Getting rid of a rootkit usually involves completely erasing and reinstalling your operating system.
- **Keyloggers:** software that runs in the background and captures all the *keys* typed. This can be used to steal someone's passwords or other sensitive information. 
- **Adware:** software that places ads on your computer, redirects you to ad-filled websites, and more. The adware developer makes money from you seeing these ads. 
- **Spyware:** records everything you do on your computer and sends it back to the hacker. It also allows the hacker to access your microphone and webcam without you knowing. 
- **Ransomware:** is a dangerous type of malware that encrypts all your files and demands a random (usually in cryptocurrencies like Bitcoin) before giving you the decryption key. Ransomware often spreads as a worm, and can cause serious damage to infected networks. (for example: [this 2017 ransomware attack that encrypted the data on all UK hospital computers](https://www.acronis.com/en-us/articles/nhs-cyber-attack/))

#### Protecting Yourself from Malware 
There are many ways to protect yourself from malware (we'll learn more in [Ch. 10](/docs/ch10-securitypractices)), but here are a few suggestions you can implement today:
- Keep your operating system updated with the latest security patches. Have these set to install automatically, and restart your computer regularly. 
- Install an anti-malware program (Windows Defender, built in to Windows 10, works fine), schedule regular scans, and keep it on always.  
- Be aware of the applications and browser extensions installed on your device. Uninstall any applications you do not recognize or use. 
- Do not visit suspicious sites or open suspicious files, emails, or messages. 
- Download applications from the developers website, or a trusted App Store, only. 
- Only install legitimate, licensed software. Software piracy is a major cause of malware infection. 
- Consider using an ad-blocker [on your device](https://ublockorigin.com/) or [network-wide](https://pi-hole.net/). Malicious ads are another major source of malware infection. 

## Understanding Access Control
IT Professionals need to make sure that access to private information and secure systems is limited to people we trust. The process of limiting access to systems and data is known as *access control*. We use the AAA framework to make sure access control is implemented properly.  

### Authentication
Authentication asks the user, “Who are you?”. This is the simplest type of access control and one you're likely familiar with. Anytime you enter a username and password, you are authenticating. 

**Single-Factor Authentication** is the simplest type of authentication, requiring one piece of information (like a password) to authenticate a user's identity. However, with ease-of-use comes security issues. If a users password is compromised, anyone is able to log in.

Today, most organizations will require **Multi-Factor Authentication** to access secure systems. Sometimes referred to as 2-Factor-Authentication (or 2FA), this requires we give at something from at least 2 categories:
- **Something you know:** a password, PIN, or answers to security questions
- **Something you have:** a smart card, USB key, or a one-time password generated by a smartphone app or delivered by text message (SMS authentication is insecure, use [Authy](https://authy.com/)!) 
- **Something you are (biometrics):** fingerprint scan, iris (eyeball) scan, Face ID, and more...  

Some organizations will use a feature called **Single Sign-On (SSO)**, where a user only needs to authenticate once in order to access many systems and services. While this is convenient, it can mean that a hacker that is able to bypass authentication measures for one system can now access everything. 

### Authorization
Similar to the concept of user permissions ([see: Operating Systems](/docs/ch04-operatingsystems)), authorization limits a users ability to access or change certain files, systems, or resources. In setting a users authorizations, we should use the **Principle of Least Privilege** model, which says that users should only be granted the minimum permissions necessary to do their job, nothing more. 

There are a number of ways to determine what a user is authorized to do, sorted from least secure to most: 

#### Discretionary Access Control 
In this model, the user gets to set the security restrictions for files they created or own. This model is common in smaller organizations without the need for strict control over information sharing. For example: you might create a document in Google Docs and want to share it with your coworker. You open the sharing settings, type in their email address, and press okay. Your coworker can see and edit the document without any issues.

This model is very flexible, and puts very few burdens on the system administrator or IT department. However, giving users this much control over access control will almost always lead to the Principle of Least Privilege being ignored. 

#### Role-Based Access Control 
In this model, all users have a number of roles assigned to their account. The system administrator allows access to different resources based on the roles a user is assigned. The roles necessary to view or edit a file are set in the **Access Control List (ACL)**

For example: John Smith has the following roles assigned with his account: *Sales Department*. His roles allow him access to the resources in the Sales Department drive only. He gets a promotion and the *Management* role is assigned to his account. He now also has access to the Managers, Human Resources, and Payroll drives. 

This is generally the best compromise between security and resources required to implement, and is how most companies do Authorization. 

#### Mandatory Access Control 
Common in government computer networks, all objects (files) are given a specific *classification*, also called a *security label* that determines who may have access to it. For an example, a FBI employee with Top-Secret clearance would be able to view any resources with a Top-Secret or lower classification within the FBI network. 

While this is the most secure form of access control, it is very time consuming for an administrator to classify each object in the network. It also requires ongoing work to make sure all resources are appropriately classified, and all users have the appropriate permissions associated with their account. 

### Accounting
To keep our systems secure, it's important to keep record of what information is accessed or actions are performed, by who, and when. When we collect this data, it can be useful later in determining how or why information was leaked, malware was installed, etc. 

For example, the Windows utility **Event Viewer** keeps a record of everything that happens on a Windows system. Many companies will also save employees web browsing history in the event it needs to be used later. 

Of course, a user can just say "It wasn't me! I was hacked.". To prevent this, it's important to implement **non-repudiation** measures. These are methods that can be used as undeniable proof that a person did something. For example: you might have a biometric scanners and security cameras inside a server room that can be used to identify if someone is stealing or damaging equipment. It's hard to deny actions when there's photographic evidence of it. Other examples, like requiring a signature before receiving a package or getting a receipt after making a purchase are easier to forge, and aren't proof a person did an action. 

## Summary
In better understanding hackers, their motivations, and the methods they use to attack our systems, you'll know how to better protect your systems, and the systems you're responsible for as an IT Professional. In knowing how to limit access to sensitive information, you'll keep your personal and company data secure. Just remember the CIA (Confidential, Integrity, and Availability) and AAA (Authentication, Authorization, and Accounting) models, and you'll do great on this chapter.
