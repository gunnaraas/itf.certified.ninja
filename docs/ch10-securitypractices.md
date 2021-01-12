---
id: "ch10-securitypractices"
title: "Ch. 10 - Security Best Practices"
---
# Understanding Security Best Practices
The only way to 100% guarantee your computer is completely safe from hackers is to never connect it to the internet, not install any software, and not let anyone use it. However, for most of us, that'd make our computer useless. However, there are some best practices to keep our devices safer and more secure. While it won't keep us 100% safe, it'll make it challenging enough for hackers that they will hopefully give up and focus on easier targets. 

Just like you wouldn't want to walk down a dark alley in the middle of the night, there are some things you don't want to do on your computer. This chapter will provide you with information that will help improve your devices security. 

## Device Hardening
Much of the time - it's enough to just make your devices harder to hack than the average user. We do this through a practice known as *device hardening*. These are proactive steps we can take to reduce the likelihood of a successful hacking attempt. 

### Updating Devices and Using System Passwords
As we discussed in Chapter 9, keeping our operating system updated protects us from known security vulnerabilities. Most serious hacks are successful because of old software with known security vulnerabilities that would've been fixed with regular updates. 

On Windows, updates are installed using the Windows Update utility (found in the Settings app). On macOS, updates are found in the App Store and in System Preferences. iOS and Android devices can be updated through the Settings app as well.  

Just like we wouldn't let our email, bank accounts, and social media be available without a password, we should make sure that our devices have a password as well. Failing to use a password means that users with physical access to the device (for example: if your laptop is stolen) can access all your data. It can also allow users with remote access to easily disable security precautions, like anti-malware software, that you might have in place. If your device supports it, it's generally a good idea to enable disk encryption so that your data remains private to those who don't have the password (key). 

### Protecting against Network Threats 
As we learned in Ch. 09 - most malware enters our computer via the internet. Thankfully, software exists that can help defend us from these threats. 

**Antivirus** software can alert you when a virus is found on your machine. Every virus has a unique *signature* that identifies it, and the antivirus software works by scanning all your files for files with a matching signature. Today, software is generally capable of detecting all types of malware, but they still market it as antivirus as the terms are better understood by the general consumer. 
If it detects a virus, it may offer you one of a few different options: 
- Quarantine: Placing the virus in an off-limits area so that it cannot run or damage other files without actually deleting it from your system.
- Remove: Securely erases the identified files from your device.
- Allow: Allows the virus to remain on your computer. This is not recommended unless you know what you're doing. 

**Antispyware** applications are specifically designed to identify and remove spyware from your computer.  

**Antispam** is used to identify and delete unwanted spam (usually email) messages. While spam emails can't damage your computer, it's annoying and can lead to fraud. Today, most email providers have anti-spam programs built-in so you don't need your own, but some businesses will pay for additional spam protection. 

**Firewalls** monitor your network traffic and block unwanted information from entering or leaving your machine. Most computers come with a software (host-based) firewall preinstalled. Large corporate networks might have a standalone firewall device, which looks similar to a server, scanning all the traffic on a network. 

### Diagnosing and Fixing Malware Infections 
As an IT professional, you likely will be tasked with diagnosing and fixing a computer that has been infected with malware.
Common signs of malware infection include: 
- Computer is slower than usual 
- CPU, GPU, and memory usage is unusually high, even when no programs are running. 
- Warning or error messages that won't go away 
- Contacts start receiving messages from your account that you didn't send 
- Large number of ads and pop-ups when using your browser

The following 5 steps are used to fix an infected system:
1.	Identify malware symptoms
2.	Quarantine the infected system (disconnect from the network to prevent spread) 
3.	Remediate infected systems (run antimalware programs or restore computer from a backup)
4.	Schedule scans and updates
5.	Educate the end user to avoid a repeat performance

### Removing and Disabling Software and Services 
Unused programs and features may cause security holes that hackers would love to exploit. Because a user is not using a particular program, an attacker may plant a bug within that program and continue to run tasks in the background without the user noticing. Therefore, if you are no longer using a piece of software, it's best to uninstall it from your device. 

On desktop and laptop computers, you may wish to disable **AutoPlay**. This is a feature that will automatically run programs stored on a external storage device, and can be used to automatically run malware when an infected storage device is connected. Of course, it's also smart to not connect random flash drives or disks you find as well!

### Disabling Unused Communication Methods
If you're not using a certain communication method, it should be disabled so that bad actors can't access your device through it. Typically impacting mobile devices - this can include disabling Bluetooth to prevent Bluejacking (sending spam to your phone via Bluetooth) and Bluesnarfing (stealing data from your phone via Bluetooth), as well as disabling NFC to prevent unauthorized data transfer to nearby devices. 

### Browsing the Internet Safely
While your web browser is one of the main routes malware enters your computer, safe browsing practices can be used to limit the dangers of using the internet. Below are the techniques that can be implemented to improve Browser safety:
- Keep your browser up-to-date, older browsers have greater potential for security exploits.
- Manage plugins, add-on, toolbars, and extensions. This reduces potential holes to the system and consumption of system resources.
- Manage security settings properly by configuring browser cookie settings, clearing cache and enabling pop-up blocking.
- Know how to recognize secure websites by avoiding sites that only use http:// or have invalid certificates. You should only enter sensitive information to websites that use https://. 
- Disabling Autofill to prevent you from submitting personal information to online forms. 
- Do not visit piracy, hate-speech, or pornographic websites.   
- Limit your use of personally identifiable information (name, address, phone number, etc.) online.
- Look out for websites with bad spelling or grammar, or deals that seem "too good to be true". 
- Threats like "you've been infected with a virus" or blackmail.

## Managing Users
Users are the biggest security vulnerability. Precautions can be taken to minimize the amount of damage users can do to their system and the network. 

Users permissions should be limited. The administrator role should only be assigned to trusted individuals, and never used for day-to-day use. In addition, the Guest account should be disabled unless it's a publicly accessible computer. 

The rules about using a computer and network should be written clearly, identifying what behaviors are deemed inappropriate and the consequences for performing those actions within a company. This document is usually called the **Acceptable Use Policy (AUP)**. In addition, users should be clearly informed about their privacy rights on company devices (what data is collected, for how long, why). If your company handles sensitive information, there should also be clear policies about how to manage that information appropriately.  

**A note on privacy**: even on your own computer, privacy is not guaranteed. Your data on social media sites, free email accounts, and apps like Whatsapp and Snapchat are not private. 

### Effective Passwords
Passwords should be difficult to guess, even by someone who knows you well. 
- Long: meaning it will have more than 8 characters. Some organizations recommend using a passphrase, or a combination of words. 
- Complex: it contains at least one capital letter and at least one number and/or symbol.
- Unusual: The password doesn’t appear to be in a dictionary and isn’t a proper noun or word.
  - Substitute zero for the letter o in words: e.g. `St0rageR00m`
  - Substitute numbers for letters: use the numerical that represents the letter of the alphabet or use the numeral that represents the position in the word.
  - Combine two or more unrelated but memorable words: e.g., `GroceryCandleFlowerpot`
  - Substitute a symbol for a letter that it resembles: e.g., `$ubstitution`
- Change your password regularly. Corporate IT policies require that you change your password at regular intervals, such as every 90 days.

## Using Data Encryption
When possible, always use encryption. This includes **Data at Rest** (data stored on your local device) and **Data in Transit** (data you're communicating over the internet). 
- The best encryption to use with for data in transit is ones built on **Public Key Infrastructure (PKI)** is a popular asymmetrical encryption technology which uses 2 keys, a public and a private key. With this, you're able to communicate with others without knowing their encryption password. 
- Email: All major corporate email providers and the big public ones support the encryption of emails in transit.
- Internet Browsing: Meaning if a website has HTTPS then it would mean the data being transmitted to and from a user would be encrypted.
- Virtual Private Network: is a secure, encrypted connection between two specific computers.

# Summary
This lesson was focused on security best practices. It looked at device hardening, which included keeping the software up-to-date, using passwords, and changing default passwords. Next was protecting against network threats using antivirus and anti-malware software and software firewalls. Then user account management which meant clearly defining which user accounts to use and disabling accounts that are not in use such as guest accounts. Finally, we concluded with encryption of the device’s files and data packets, and the data packets being transported in its network. 	
