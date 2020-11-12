---
id: "ch09-securityconcepts"
title: "Ch. 09 - Security Concepts and Threats"
---
Security is important to us; it prevents us from being vulnerable to what we don’t know or could be used against us and it allows us to protect that which we hold dear. In the world of computers, security paranoia is a good, so long as there is a healthy dosage of it. We will learn the many types of threats to our safety, security and privacy, the three facets of security such as confidentiality, integrity, availability and finally the framework for controlling access to resources.

# Understanding Hackers and Motives 
-	Hacking refer to a variety of computer crimes that involve gaining unauthorized access to a computer system or its data. There are 3 specific areas that hackers like to attack: Data, Intellectual Property and Digital Products.
-	Data as a Driver of Business Decisions companies use data to improve their business or have insights which would allow them to have a competitive advantage of over other and finally to remain compliant with governmental regulations.
-	Intellectual Property is the idea, that companies that invent a new idea or product want to ensure that they have exclusive rights to sell it for a fair period of time.
-	Trademark a word, words or a symbol legally registered as representing a company or product e.g. Apples iconic apple and Nikes “Just do it” words.
-	Copyright is legal document that protects the original works of authorship e.g. songs, plays, movies, computer applications and architecture.
-	Patent another legal document that signifies the ownership of an invention for a limited time e.g. a type of machine, process, formula, or product.
-	Digital Products: are products that don’t make money from physical assets e.g. Facebook, Instagram, Uber, Lyft, etc.

# Understanding Security Threats
In the world of computers one thing remains true, you have to know how to keep your device secure. Keeping your device secure, is similar to acting as a security guard, the idea is to keep your eyes open for anything that might be suspicious. In computer security the framework used is the CIA triad which is a model that focuses on Confidentiality, Integrity and Availability. Different threats are designed to attack one of the headings of the Triad framework.

## Confidentiality Concerns
Confidentiality ensures that Private information remains private. Attacks on confidentiality can 		include snooping, eavesdropping, wiretapping, social engineering and dumpster diving.
-	Snooping (Sniffing) is when the attacker captures network traffic through a protocol analyzer and then looks for key pieces of information. This type of attack occurs on both wire and wireless networks. A method used to defend a network from this type of attacks would be to enable network encryption, which would protect networks, usernames and passwords.
-	Protocol analyzer (sniffer) is a tool used to monitor a networks data packet.
-	Eavesdropping the act of listening to a conversation to gain key information. This includes 2 types Low-Level and High-Level attack. In both attacks it’s pretty hard to defend from.
-	Low -Level attack: is a method in which the attacker listens to a conversation to key information, usually its within close proximity.
-	High-Level attack: is a method in which the attacker uses other methods such as video cameras and microphones to listen in on conversation.
-	Wiretapping is the unauthorized monitoring of communications between two parties. This includes wired and wireless networks.
-	Bug is a monitoring device used to access unauthorized communications between two parties.
-	Social Engineering is the process in which an attacker attempts to acquire information about a user or user’s network and system by social means, such as talking to people in the organization. Examples include: someone calling and pretending to be a co-worker in a remote office with your company, who really needs help and has a plausible story. A method of defending against this kind of attack would be to have multiple levels of authentication information or asking multiple questions before giving the information that the attacker needs.
-	Phishing a form of social engineering attack in which someone uses email to ask you for a piece of information that they are missing by making it look as if it is a legitimate request. There are two forms of phishing: Spear phishing and Whaling. A method to prevent social engineering attacks would be to educate users and staff to never give out passwords and user IDs over the phone or via email or to anyone who isn’t positively verified as being who they say they are.
-	Spear Phishing the attacker uses information that the target would be less likely to question because it appears to be coming from a trusted source.
-	Whaling is when the attacker identifies (targets) one person from whom they can gain all of the data they want e.g. a manager or business owner.
-	Shoulder Surfing involves the attacker watching a user entering sensitive data. The only method to protect users from this attack would be to use a privacy screen.
-	Privacy Screen is a special screen that directs the light from the display at a restricted angle so that anyone who isn’t viewing it straight on won’t be able to read it clearly.
-	Dumpster Diving is an attacker who goes through the dumpers, or a user’s garbage and steal information. The best way to avoid this attack is not to through away anything that can cause you problems later and also to shred all papers in a good shredder.

## Integrity Concerns
When users access data, they have the expectation that the data is correct and from a valid source. Integrity means that the data is accurate and consistent and from the indicated source. There are 4 threats to data integrity which are: man-in-the-middle, replay attacks, impersonation and unauthorized information alteration.
-	Man-in-the-Middle Attack is a type of attack that is accomplished via some form of wiretapping, where someone secretly places something (piece of software or rogue router) between a server and the client, and neither party is aware of it. Due to the popularity of wireless networks, a common solution to this problem is to enforce a secure wireless authentication protocol such as WPA2.
-	Replay Attack is commonly an extension of snooping or wiretapping, the attacker captures information from a sender with the intent of using it later, e.g. replaying the message.
-	Impersonation is the act of pretending to be someone or something that you are not e.g. faking IP addresses, phone numbers, etc.
-	Unauthorized Information Alteration is when an attacker changes information in an attempt to damage a business or person, e.g. altering data within a database. This typically possible through a disgruntled employee that seeks to damage the company or perhaps another employee might try to do something like sneak a pay raise through the HR system.

## Availability Concerns
There are attackers that simply want to make it so that no one can access data. The final pillar of the CIA triad is availability, meaning that the data is accessible when the user needs it. There are two forms of availability: denying service and hardware issues.
-	Denying Service means the number of ways to try to keep users from accessing data or network they need.
-	DoS is an attack in which the attacker floods a server with a multitude of illegitimate connection requests more than it can handle so it’s unable to respond to legitimate requests. These attacks are typically occurred to web servers, but they could be done to wireless networks too, where the attacker jams the wireless frequency so that no legitimate traffic can get through. A method used tot mitigate this would be to find the offending signal and shut it down.
-	Service Outage is any time that service is denied.
-	Power outage is when an electrical grid loses power, typically though power failure or a natural disaster, however if attackers target a power grid server, they may cause a power outage. A method to resolve this problem would be to use a UPS system to allow the server to run for a few minutes.
-	Uninterruptible power supply (UPS) is a device that help deals with power outages, by utilizing a backup battery that is connected to the device which needs the power (server in our example).
-	Hardware Concerns is important because it allows organizations and individuals from loosing money related to Hardware Damage and Theft.
-	Hardware Damage is the act in which an attacker causes destruction and hardware failure due to physical means. To prevent this, users have to make sure that their device is in a secure environment.
-	Hardware Theft is an act in which an attacker/ thief physically takes a device without permission. Locking devices and never leaving devices unattended in public areas prevents hardware theft e.g. many laptops have a Kensington security slot (K-slot) which is a type of lock that is attached to a security cable which allows devices such as laptops to be bolted to the wall or furniture preventing physical theft. The locks are secured with either a key or a combination.

## Software-Based Security Threats
Software-based security threats are the widest-ranging group of security threats. These threats are broadly described as malware, which means any software that is designed to do harm to your computer. This includes: Exploits, Viruses, Worms, Trojan Horses, Adware, Spyware, Ransomware, Rootkits, Backdoors and Keyloggers. Most of these security threats can be prevented though the use of antivirus.
-	OS and Application Exploits
-	Viruses are computer code that inserts itself into an executable file, which is used to cause system or computer damage and/or disruption.
-	Symptoms of a Virus/Malware Infection could be one of the following:
-	Programs on the system start to load more slowly.
-	Unusual files appear on hard driver, or files start to disappear from the system.
-	Program sizes change from the installed versions.
-	Software or applications begin to exhibit unusual operating characteristics.
-	The system mysteriously shuts itself down or starts itself up and does a great deal of unanticipated disk activity.
-	Losing access to disk drive or other systems mysteriously.
-	The system suddenly doesn’t reboot or give unexpected error messages during startup.
-	Viruses Work typically by spreading through emails. They infect the target system and attach itself to all of the emails that the newly infected system sends, which in turn infects the computers of the recipients of the emails.
-	Virus Transmission in a Network behaves differently depending on how the programmer developed it. Some viruses destroy the target system immediately and others use the victim as a carrier. Viruses are detected and removed using antivirus software.
-	Worms is different form a virus in that it can be reproduce itself, it’s self-contained and it doesn’t need a host application to be transported. It possible for a worm to contain payload for a target system. Worms can be active or passive. Most anti-malware programs can detect and remove worms.
-	Payload additional malware that is carried by a worm.
-	Active worms: self-transport without human intervention.
-	Passive worms: rely on the user’s innocence to transport themselves from one location to another e.g. normally through email or social engineering.
-	Trojan Horses (Trojan) is a rouge application that enters the system or network disguised as another program. The most common way that Trojans horse program spread is via worms. Most anti-malware programs can detect and remove Trojan horses.
-	Keylogger records all keystrokes and sends the information to a file or to a remote location.
-	Adware is a category of applications that display unrequested ads on your computer. Adware is an annoyance, with no pretense of being anything else. It can be difficult to remove, much like a virus infection. Anti-malware software may be of some help, but you may also need to do a web search on the removal process to find Registry-editing instruments to help you take out adware.
-	Spyware is software that (usually secretly) records your computer usage e.g. Keyloggers. Most spyware is illegal, works surreptitiously and can be difficult to remove. Some anti-malware software detects and removes spyware, there are also applications specifically designed to remove spyware and adware from your system e.g. Windows Defender.
-	Ransomware is a particularly insidious type of malware that extorts the infected users for money. Most anti-malware software will block ransomware, however if your device is infected or your files are infected, the only recourse may be to wipe your system and restore from backup.
-	Crypto-viral extortion is a type of threat in which a user’s hard drive gets encrypted and the attackers ask for money if you wanted to get them back.
-	Rootkits are programs that have the ability to hide certain things from the operating system, they do so by obtaining (and retaining) administrative-level access.  Many rootkits are written to get around anti-malware programs that aren’t kept up-to-date. The best defense against rootkits would be to monitor the behavior of your Operating System and catch the rootkit in the process of installation.
-	Backdoors is a method of circumventing the normal security system on a computer e.g. hacker with a backdoor logging in by providing no credentials. Contributing factors include not changing the default password or debugging routines built into software and not removing them before the releasing into production.
-	Spam is the flood of unsolicited messages that you receive electronically. Most spam comes via email. It uses spambots to send the multitudes of emails to multiple users. The best way to deal with spam that gets into a user’s email would be to delete it.
-	Spambot is a program that an attacker creates to generate spam.
-	Password Cracking is the process in which a hacker may try to crack a user’s password by, trying the default password for a device or service, knows a user’s password from a different source or website, guess based on things they know about you, and through brute-force methods. Fortunately, websites and computer systems have limits to the number of logins attempts that can be tried before the account is locked.
-	Brute-force methods: is when a hacker tried to crack a user’s password through an automated computer program, which is designed to start a trying random string of characters in an attempt to crack the password.

# Understanding Access Control
In information security, the framework used for access control is known as triple A, meaning authentication, authorization and accounting, in addition to the mix auditing and nonrepudiation is included.

## Authentication
Authentication asks the question, “Who are you?” This happens when the system being logged 		into validates the user has proper credentials, typically by entering a username and password.
-	Types of Authentication try to authenticate a user by asking the user to provide something they know, have, are and finally where they are. Authentication comes in 2 forms:
-	Single-factor authentication: requires only one piece of information beyond the username to allow access e.g. providing the password.
-	Multifactor authentication: requires more than one piece of information for the user to log in e.g. password and security questions, smart card and the password, etc. Devices used for multifactor authentication are, security questions, smart cards, security tokens, specific location and biometric devices.
-	Single Sign-On is a device that is used to give users access to all of the applications and systems they need with one initial login.
-	Pros: Takes away the inconvenience of accessing all resources on a network.
-	Cons: Removes potential security doors that otherwise exist between the user and various resources.

## Authorization
Authorization is determining what the user can do. In computers, this is achieved through 		permissions granted to the user, which are groups of privileges e.g. one user may be given the 		privilege to make changes on a file, while another user many only be allowed to open and read 		the file. The foundations of Authorization are rooted in the Principle of least privilege which states that, users should only be granted the least amount of access required to perform their 		and nothing more. There are 4 methods that are used to control access (or enforce the principle		of least privilege) which are: mandatory, discretionary, role-based and rule-based.
-	Mandatory Access Control is the most restrictive meaning it states that all objects on the computer or network will have their security managed by a system administrator. This level of access control is typically used by governmental agencies. In mandatory access control, each object is assigned a security label, users also have classification levels and category. All classifications are hierarchical
-	Pros: There is ultimate control over security.
-	Cons: It takes a lot of resources to manage properly.
-	Discretionary Access Control allows users to set their own security settings for resources on their computer. This access control method is commonly done in work group settings. Rather than having security labels as in Mandatory access control, privileges are based on an Access Control List.
-	Pros: It is a lot more flexible than mandatory control, and it creates far less burden on the system Administrators.
-	Cons: It places security in the hands of the users, which might or might not be appropriate for given set of users.
-	Access Control List, lists the users or groups who have been granted access to the object and their level of access.
-	Role-Based Access Control is access level controlled based on entire roles e.g. users who are in the Sales role having the same level of access to resources on their network. Role-based access is controlled through the use of System Administrator-defined roles.
-	Rule-Based Access Control uses ACLs which are defined by the System Administrator which defines the rules that allow or deny access to resources e.g. when a user or group attempts to access a resource, the ACL is checked to determine whether the action is permitted.

## Accounting
Accounting is the principle that seeks to keep a record of who accessed what and when, and the 		actions that person performed. In computers the OS records all activities performed by a user 		through System Logs. In Windows, system logs are kept in the Event Viewer and web browsers 		log history in the Web Browsing history.
-	Event-viewer: is a Windows-based utility that keeps track of Application, Security and System Events.
-	Web Browsing history: retains a historical account of the sites that have been visited.

## Nonrepudiation
Nonrepudiation provides proof that someone or something performed a specific action, in other 	words, it takes away denial of an event or events from taking place.
-	Video: is considered a strong form of nonrepudiation.
-	Biometrics: is a very strong form of nonrepudiation.
-	Signature: is not a strong form of nonrepudiation, due to forgery.
-	Receipt: is considered proof that a transaction occurred and be in paper or digital.

# Summary
This chapter began with a discussion on hackers, their motives and the information they try to steal or the damage they try to cause. Security threats and how they fit into the information security CIA triad which includes Confidentiality, Integrity and Availability came in next, and finally concluded with learning Access Control using the AAA model which included Authentication, Authorization and Accounting, with nonrepudiation added as well. 	
