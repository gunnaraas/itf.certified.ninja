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
Man-in-the-Middle Attack is a type of attack that is accomplished via some form of wiretapping, where someone secretly places something (piece of software or rogue router) between a server and the client, and neither party is aware of it. Due to the popularity of wireless networks, a common solution to this problem is to enforce a secure wireless authentication protocol such as WPA2.

#### Replay Attacks 
Replay Attack is commonly an extension of snooping or wiretapping, the attacker captures information from a sender with the intent of using it later, e.g. replaying the data sent when a user signs in from the hackers computer.

#### Impersonation 
Impersonation is the act of pretending to be someone or something that you are not e.g. faking IP addresses, phone numbers, etc.

#### Unauthorized Information Alteration 
Unauthorized Information Alteration is when an attacker changes information in an attempt to damage a business or person, e.g. altering data within a database. This typically possible through a disgruntled employee that seeks to damage the company or perhaps another employee might try to do something like sneak a pay raise through the HR system.

### Availability Concerns
There are attackers that simply want to make it so that no one can access data. The final pillar of the CIA triad is availability, meaning that the data is accessible when the user needs it. There are two forms of availability: denial of service and hardware issues.

#### Denial of Service 
Denial of Service (DoS) means the number of ways to try to keep users from accessing data or network they need.
- DoS is an attack in which the attacker floods a server with a multitude of illegitimate connection requests more than it can handle so it’s unable to respond to legitimate requests. These attacks are typically occurred to web servers, but they could be done to wireless networks too, where the attacker jams the wireless frequency so that no legitimate traffic can get through. A method used tot mitigate this would be to find the offending signal and shut it down.

#### Service Outage
Service Outage is any time that service is denied.
- Power outage is when an electrical grid loses power, typically though power failure or a natural disaster, however if attackers target a power grid server, they may cause a power outage. A method to resolve this problem would be to use a UPS system to allow the server to run for a few minutes.
- Uninterruptible power supply (UPS) is a device that help deals with power outages, by utilizing a backup battery that is connected to the device which needs the power (server in our example).

#### Hardware Concerns 
Hardware Concerns is important because it allows organizations and individuals from loosing money related to Hardware Damage and Theft.
- Hardware Damage is the act in which an attacker causes destruction and hardware failure due to physical means. To prevent this, users have to make sure that their device is in a secure environment.
- Hardware Theft is an act in which an attacker/ thief physically takes a device without permission. Locking devices and never leaving devices unattended in public areas prevents hardware theft e.g. many laptops have a Kensington security slot (K-slot) which is a type of lock that is attached to a security cable which allows devices such as laptops to be bolted to the wall or furniture preventing physical theft. The locks are secured with either a key or a combination.

### Software-Based Security Threats
Software-based security threats are the widest-ranging group of security threats. These threats are broadly described as malware, which means any software that is designed to do harm to your computer. This includes: Exploits, Viruses, Worms, Trojan Horses, Adware, Spyware, Ransomware, Rootkits, Backdoors and Keyloggers. Most of these security threats can be prevented though the use of antivirus.
- OS and Application Exploits
- Viruses are computer code that inserts itself into an executable file, which is used to cause system or computer damage and/or disruption.
- Symptoms of a Virus/Malware Infection could be one of the following:
- Programs on the system start to load more slowly.
- Unusual files appear on hard driver, or files start to disappear from the system.
- Program sizes change from the installed versions.
- Software or applications begin to exhibit unusual operating characteristics.
- The system mysteriously shuts itself down or starts itself up and does a great deal of unanticipated disk activity.
- Losing access to disk drive or other systems mysteriously.
- The system suddenly doesn’t reboot or give unexpected error messages during startup.
- Viruses Work typically by spreading through emails. They infect the target system and attach itself to all of the emails that the newly infected system sends, which in turn infects the computers of the recipients of the emails.
- Virus Transmission in a Network behaves differently depending on how the programmer developed it. Some viruses destroy the target system immediately and others use the victim as a carrier. Viruses are detected and removed using antivirus software.
- Worms is different form a virus in that it can be reproduce itself, it’s self-contained and it doesn’t need a host application to be transported. It possible for a worm to contain payload for a target system. Worms can be active or passive. Most anti-malware programs can detect and remove worms.
- Payload additional malware that is carried by a worm.
- Active worms: self-transport without human intervention.
- Passive worms: rely on the user’s innocence to transport themselves from one location to another e.g. normally through email or social engineering.
- Trojan Horses (Trojan) is a rouge application that enters the system or network disguised as another program. The most common way that Trojans horse program spread is via worms. Most anti-malware programs can detect and remove Trojan horses.
- Keylogger records all keystrokes and sends the information to a file or to a remote location.
- Adware is a category of applications that display unrequested ads on your computer. Adware is an annoyance, with no pretense of being anything else. It can be difficult to remove, much like a virus infection. Anti-malware software may be of some help, but you may also need to do a web search on the removal process to find Registry-editing instruments to help you take out adware.
- Spyware is software that (usually secretly) records your computer usage e.g. Keyloggers. Most spyware is illegal, works surreptitiously and can be difficult to remove. Some anti-malware software detects and removes spyware, there are also applications specifically designed to remove spyware and adware from your system e.g. Windows Defender.
- Ransomware is a particularly insidious type of malware that extorts the infected users for money. Most anti-malware software will block ransomware, however if your device is infected or your files are infected, the only recourse may be to wipe your system and restore from backup.
- Crypto-viral extortion is a type of threat in which a user’s hard drive gets encrypted and the attackers ask for money if you wanted to get them back.
- Rootkits are programs that have the ability to hide certain things from the operating system, they do so by obtaining (and retaining) administrative-level access.  Many rootkits are written to get around anti-malware programs that aren’t kept up-to-date. The best defense against rootkits would be to monitor the behavior of your Operating System and catch the rootkit in the process of installation.
- Backdoors is a method of circumventing the normal security system on a computer e.g. hacker with a backdoor logging in by providing no credentials. Contributing factors include not changing the default password or debugging routines built into software and not removing them before the releasing into production.
- Spam is the flood of unsolicited messages that you receive electronically. Most spam comes via email. It uses spambots to send the multitudes of emails to multiple users. The best way to deal with spam that gets into a user’s email would be to delete it.
- Spambot is a program that an attacker creates to generate spam.
- Password Cracking is the process in which a hacker may try to crack a user’s password by, trying the default password for a device or service, knows a user’s password from a different source or website, guess based on things they know about you, and through brute-force methods. Fortunately, websites and computer systems have limits to the number of logins attempts that can be tried before the account is locked.
- Brute-force methods: is when a hacker tried to crack a user’s password through an automated computer program, which is designed to start a trying random string of characters in an attempt to crack the password.

## Understanding Access Control
In information security, the framework used for access control is known as triple A, meaning authentication, authorization and accounting, in addition to the mix auditing and nonrepudiation is included.

### Authentication
Authentication asks the question, “Who are you?” This happens when the system being logged into validates the user has proper credentials, typically by entering a username and password.
- Types of Authentication try to authenticate a user by asking the user to provide something they know, have, are and finally where they are. Authentication comes in 2 forms:
- Single-factor authentication: requires only one piece of information beyond the username to allow access e.g. providing the password.
- Multifactor authentication: requires more than one piece of information for the user to log in e.g. password and security questions, smart card and the password, etc. Devices used for multifactor authentication are, security questions, smart cards, security tokens, specific location and biometric devices.
- Single Sign-On is a device that is used to give users access to all of the applications and systems they need with one initial login.
- Pros: Takes away the inconvenience of accessing all resources on a network.
- Cons: Removes potential security doors that otherwise exist between the user and various resources.

### Authorization
Authorization is determining what the user can do. In computers, this is achieved through permissions granted to the user, which are groups of privileges e.g. one user may be given the privilege to make changes on a file, while another user many only be allowed to open and read 	the file. The foundations of Authorization are rooted in the Principle of least privilege which states that, users should only be granted the least amount of access required to perform their and nothing more. There are 4 methods that are used to control access (or enforce the principle of least privilege) which are: mandatory, discretionary, role-based and rule-based.
- Mandatory Access Control is the most restrictive meaning it states that all objects on the computer or network will have their security managed by a system administrator. This level of access control is typically used by governmental agencies. In mandatory access control, each object is assigned a security label, users also have classification levels and category. All classifications are hierarchical
- Pros: There is ultimate control over security.
- Cons: It takes a lot of resources to manage properly.
- Discretionary Access Control allows users to set their own security settings for resources on their computer. This access control method is commonly done in work group settings. Rather than having security labels as in Mandatory access control, privileges are based on an Access Control List.
- Pros: It is a lot more flexible than mandatory control, and it creates far less burden on the system Administrators.
- Cons: It places security in the hands of the users, which might or might not be appropriate for given set of users.
- Access Control List, lists the users or groups who have been granted access to the object and their level of access.
- Role-Based Access Control is access level controlled based on entire roles e.g. users who are in the Sales role having the same level of access to resources on their network. Role-based access is controlled through the use of System Administrator-defined roles.
- Rule-Based Access Control uses ACLs which are defined by the System Administrator which defines the rules that allow or deny access to resources e.g. when a user or group attempts to access a resource, the ACL is checked to determine whether the action is permitted.

### Accounting
Accounting is the principle that seeks to keep a record of who accessed what and when, and the actions that person performed. In computers the OS records all activities performed by a user through System Logs. In Windows, system logs are kept in the Event Viewer and web browsers log history in the Web Browsing history.
- Event-viewer: is a Windows-based utility that keeps track of Application, Security and System Events.
- Web Browsing history: retains a historical account of the sites that have been visited.

### Nonrepudiation
Nonrepudiation provides proof that someone or something performed a specific action, in other words, it takes away denial of an event or events from taking place.
- Video: is considered a strong form of nonrepudiation.
- Biometrics: is a very strong form of nonrepudiation.
- Signature: is not a strong form of nonrepudiation, due to forgery.
- Receipt: is considered proof that a transaction occurred and be in paper or digital.

## Summary
This chapter began with a discussion on hackers, their motives and the information they try to steal or the damage they try to cause. Security threats and how they fit into the information security CIA triad which includes Confidentiality, Integrity and Availability came in next, and finally concluded with learning Access Control using the AAA model which included Authentication, Authorization and Accounting, with nonrepudiation added as well. 	
