---
id: "ch05-software"
title: "Ch. 05 - Software Applications"
---
# Understanding Application Architecture and Installation
Applications are the second major classification of software after operating systems. By the end of this lesson, you will understand different ways that applications are designed for use and how to ensure that they are installed properly. You will be familiar with several types of software available for both business and personal use.

## Application Design Concepts
Software developers focus on the best way to make the applications do what it supposes to do. They think about who the user will be, how the application will be used, and what the required outcomes are. There are three areas that software developers think about Platforms, delivery methods and architecture.

### Software Platforms 
Software Platforms are most critical thing for an application to run right meaning it should be able to talk to the OS.
-	**Single-platform** software are applications made for one OS, such as Windows or macOS, or for another operating system.
-	**Cross-platform** software is an application made to work across platforms (and different hardware platforms). For example, if an app works on both Windows and macOS, it is considered "cross-platform".

### Delivery methods 
Delivery Methods determine were the application will be installed and where will it be executed. There are three options were an app can be installed, local, hosted on a local network and run from a cloud.

### Application Architecture Models 
Application Architecture Models define how the app is executed, if it will run entirely on one computer or if different components of the app will be run on different systems. The umbrella term for application architecture models is n-tier architecture. The letter n is a number.

-	**Presentation tier** is the user interface (UI), which presents data to the user and allows the user to interact with the system.
-	**Business Logic** tier processes commands, performs calculations and manage data flow. It can also make logical decisions based on specific criteria. It typically coordinates between presentation and data.
-	**Data tier** stores data in a database or file system.

The advantages of a three-tier model include better security, scalability, flexibility, and load balancing. These advantages are more complex and take an effort to setup and manage.

![A diagram of a 3-tier application](/assets/images/ch05-architecture_3tier.png "Diagram of 3-tier application architecture")

A two-tier architecture is usually a client-server model, with the workstation having the UI and the server hosting the other layers. The Business logic layer disappears, and the application layer directly accesses the database layer. Two tier models are usually cheaper to deploy than three-tier ones, and they are more suitable for small-scale applications.

![A diagram of a 2-tier application](/assets/images/ch05-architecture_2tier.png "Diagram of a 2-tier application architecture")

One tier application are run from one computer, this could be on client computer or a server, depending on the application and user needs.

![A diagram of a 1-tier application](/assets/images/ch05-architecture_1tier.jpg "Diagram of a 1-tier application architecture")

## Software Management Best Practices
Software management isn’t too hard, though there are a few things that you need to think about before installing an application, such as whether it will work with your OS or not. Then, the proper way to install and uninstall features on your OS, Apps and Driver. Finally, updating or patching the software on your system.
-	Considerations for Installing Software
    - Check that software is compatible with your Operating System and CPU architecture 
    - Check that your hardware is robust enough to support it 
    - Understand licensing requirements for that software 
-	Software Compatibility specifications for a new application are found on the Minimum System Requirements Documentation. This documentation usually includes a list of compatible OS versions, minimum processor speed, RAM, Hard Disk space, particular display adapter, display adapter RAM and/or permanent Internet connection.

#### Software Licensing 
Software Licensing is an agreement that gives the application user the right to use the application in a way that is described by the licensing agreement.
-	**Freeware** is software that is completely free, but doesn’t include the source code and users aren’t allowed to modify the application. I.e. Google Chrome, Microsoft Edge.
-	**Open Source** is free software, in which users are allowed to modify the source code and make modifications to the application. i.e. Linux, Apache OpenOffice.
-	**Shareware** is software that provides a free trail, with the expectation that you pay for it if you like and decide to keep it.
-	**Single Use** is a commercial software for which the license restricts installation to a single user. Depending on the License agreement, the user might be able to install the software on only one computer or multiple computers. Even if installed on multiple computers, only one instance of the app can be used at once.
-	**Concurrent** allows the software to be installed on many PC used concurrently by a small number of them. This is useful in situations where everyone needs to have an application available, but the application gets very little actual use.
-	**Corporate**, **Campus**, **Group** or **Site** use Product Keys or Serial numbers during installation or the first time the application is opened. This type of license permits an organization to install the application on an agreed-upon number of PCs. For example, a school may buy a site license of an antivirus program and allow all students to download and install it freely to ensure that the school’s network remains virus free.

-	Installing and Uninstalling Software has been made easy by software manufactures. Within an Operating System additional OS features, applications or drivers may be installed and each installation may require a slightly different process.
-	Operating System Features are installed during the initial installation of the OS.
-	Applications can be installed from either an optical disc, flash drive, or from the Internet.
-	Read the instructions to make sure you don’t miss a step that could be crucial to the installation.
-	Read the agreements to learn how the software company can collect information on you and possibly sell it to their affiliates.
-	Be aware of advance options if you want to change the directory where the software is installed, choose components to uninstall to save disk space or components to speed up the application and security settings or app configuration preferences you may have.

#### Registering and Activation
-	Registering software is a method in which software companies collect user information for marketing purposes or sell it to a third-party vendor. This is usually not required, however the benefit to the user would be eligibility to discounts on new versions, free updates, etc.
-	Activation prevents unlimited free use of copied or replicated software. Software company maintains an online database of all the installation key codes. When you install the software, you’re prompted to activate it. The activation program examines the hardware on your system and generates a code that describes the general state of the hardware. It then sends that code to the activation server online. If you try to activate the software on a different PC, the activation server compares the hardware code it has on file to the new one coming in, and if the are too different, it assumes that you’re installing on a different PC and refuses to let you activate the software.
- Uninstalling Applications can free up disk space and memory that was previously occupied.
-	Clean Uninstallation for Mac Users is pretty easy, just drag a file or an application to the trash bin icon and it will be uninstalled. On a Windows machine a clean uninstall can be performed by uninstalling it through programs and features app of Control Panel or deleting it using a brute force method by deleting program files and editing windows registry (Brute force method is never recommended).
-	Driver is a piece of software written to tell the operating system how to communicate with a specific piece of hardware. The OS typically install this software through plug and play. If you want to install manually, it would be done either though a CD-ROM or Flash drive if not it will be done through the manufacture website. Driver files typically come as an .exe file extension.
-	Updating and Patching Software help fix bugs and/or add functionality to the software that didn’t exist before and it’s very common for the company issue updates for free.
-	Updating and Patching Operating Systems allow it to remain stable, reliable and secure from problems due to viruses, worms and other exploits.
-	Automatic Update is a feature, which relieves users of the burden of remembering to look for and install updates. However, occasionally an update may cause a problem on some systems, like creating an incompatibility with a certain piece of hardware installed to stop working, it is for this reason that Network administrators control how updates roll into their devices and not allow automatic updates.
-	Windows Update allows you to manually check for updates, review update history more. On Macs, software update can also recommend and install updates for certain applications, especially, those made by the same company as the OS.
-	Updating and Patching Applications for the Operating System isn’t as critical as updating the security software. This means security software such as antivirus or antimalware should always be kept up to date.
-	Updating Drivers isn’t really necessary, the only time that you update drivers would be when you are experiencing problems with your hardware device or it stopped working. Occasionally, you will run into issues where you install a driver update and it causes more problems than you had originally had. In this situation simply roll back the driver.

# Exploring Common Application Types 
There are a lot of different software applications in the world, most of all the software can be put in one of three groups of software types - productivity, collaboration and business. Then there are utility software apps that provides security and other helpful functionality.

## File Extensions
File extensions tells the user a little about the file, and it tells the operating system what to do with the file.
-	Executables are extensions that are designed to execute a program directly by the Operating System.

## Productivity Software
This software is designed to make you more productive, the software in this section will help getting work done and ideally make work easier as well.
-	Word Processing Software allows you to create anything from simple letters, resumes, detailed reports, flyers and other kinds of documents.
-	Spreadsheet Software allow the user to manage numbers and small quantities of data. i.e. Microsoft’s excel.
-	Presentation Software allows users to put ideas in slides so you can share a full-screen show from a computer. Within presentations, you can add text, graphs, charts, pictures and shapes, along with videos embedded for playback with special effects such as fading in or out and adding sound effects.
-	Visual Diagramming Software can often create charts and graphs, as well as complicated schematic drawings such as floor plans or circuit paths.

## Collaboration Software
Collaboration Software is software that allows workers located in different places to work together meaning that it’s a software that blurs the lines between those who work right next to each other and those that do not. I.e. email, working online, sharing, storing files, sharing screens, having videoconferences, and instant messaging each other.
-	Email Client Software is the most commonly used collaboration software today.
-	Conferencing Software is software that can be used for phone calls, but also incorporate a video component. i.e. videoconferencing is considered making a call, like a telephone call, to a remote location using a computer.
-	Telepresence is high-end videoconferencing calls that make the user feel as if the people on the other end of the line and the user are actually in the same room. i.e. Cisco WebEx, GoToMeeting, Fuze, join.me, Slack, Mikogo, and Adobe connect.
-	Voice over Internet Protocol (VoIP) can allow users to send each other voice-only communications over network cables or video along with voice, all over the same network connection.
-	Instant Messaging Software allows users to send a text to another user in real-time. This is what is referred to as texting, when it’s done over the phone.
-	Online Workspace allows multiple people to collaborate on the file at the same time. This is involves sharing the screen of the file amongst a user with other users.
-	Document Storage and Sharing amongst workers is very important, however different storage systems are configured to either be easy to access and others geared towards online backups.
-	Storage and Upload Maximums meaning how much storage and what is the upload size limit?
-	Backups meaning is the data backed up, if so, how often?
-	File Synchronization meaning if there are multiple users working on a file, how does the system manage saving the data, does it keep a virtual copy on the local system and does it synchronize with the online version?
-	File Encryption meaning are the files encrypted when they are stored?
-	Maintained Servers, who owns, maintains the company server’s and do they do it themselves or license it out to third party such as Google?
-	Security Mechanisms, can you set folder permissions and set different permissions for each folder?
-	Mobile Platforms, can the sharing system be synchronized with mobile devices as well?
-	Help and Support, how accessible is their help and support system, do they just have email support, or can you get live chat if you need it?

## Business Software
We talk of software that runs databases, manages projects, performed a specific function and does some form of accounting.
-	Basic Database Software doesn’t anything more than a spreadsheet, which contains logical data structure meant to be accessed easily. However, Databases can be more complex though, with multiple tables interacting with each other to produce the data you need to use. When looking for database software you should make sure that it is easy to use, can expand to meet your storage needs, and has the security you require.
-	Project Management Software provides a visual representation of tasks needed to complete a project. This software has features such as allowing users to create tasks, set dependencies, set milestones, perform scheduling, create reports and Gantt charts.
-	Business-Specific Software will depend on the business needs. Below are some examples of the business-specific Software.
-	Desktop Publishing or Page Layout Software is software that is used to create books or magazines. This software is also capable of creating smaller projects such as pamphlets or flyers. i.e. Microsoft Office Word.
-	Computer-Aided Design and Graphic Design software is used by designers of buildings and other structures as well as artist to create two- and three-dimensional drawings. I.e. creating blue prints of a house.
Graphic designers use similar software but it specializes in graphics for designing corporate logos, professionally altering photos or designing websites.
-	Medical and Scientific Software
-	Medical software manages holding patient’s medical records, while also providing an interface with medical testing equipment. If you were coming to a hospital you would meet a receptionist whom will enter a patient’s information into an Electronic Medical Record (EMR) or Electronic Health Records (EHR) software.
-	Scientific software can be universal meaning it can be used for statistical testing, or it can be highly specialized depending on the experimentation needs. For example, there are software used to help aid research in topics form bioinformatics to genetics to nuclear magnetic resonance to computational astronomy.
-	Accounting Software has two divisions professional and small business/home use, however the software is meant to analyze markets, help manage finances, track budgets, manage banking, investment planning, generate reports and pay bills automatically. i.e. Quicken, QuickBooks, Microsoft Money, iCash, etc.

## Utility Software
Utility Software provides extra services that you can use on a computer and may come in handy, 	but they are not necessary to help get project’s done or communicate with others.
-	Anti-Malware
-	Malware is software that does harm to your computer.
-	How Anti-Malware Works is by monitoring the activity of on your computer for any activity that appears suspicious.
-	Inoculating is the process of running an antivirus program on a computer.
-	Configuring Anti-Malware is simple because the default settings during installation provide sufficient protection, however you should make sure that the system is configured to automatically update so that the definitions remain up-to-date.

Removing Malware requires a few steps to be followed to ensure that the system is secure after removing the infection.
1.  Identify malware symptoms Is your computer acting unusual, is the system slowing down or acting different?
2. Quarantine the infected system by disconnecting the computer to the system that it is connected to, to prevent the virus from spreading to other computers.
3. Remediate infected systems by updating the antivirus software to the latest definitions, or using the appropriate scan and removal techniques.
4. Schedule scans and updates by automatic system scans and allowing the software to update daily for the latest definitions.
5. Educate the end user to prevent them from navigating those harmful sites.

### Firewall 
Firewalls can be a software application or a hardware devices that serves as your network’s security guard. Firewalls protect users in two ways, preventing your network from hackers and preventing your computer from accessing bad networks.
-	How Firewalls Work: by allowing only packets (network data) that pass specific security restrictions to get through. Firewalls use an **Access Control List (ACL)**, the set of rules that determine which traffic gets through the firewall and which doesn’t. ACLs are typically configured to block traffic by IP address, port number, domain name, or a combination of the three.
-	Enabling a Software Firewall may not be required because it may be enabled by default by the operating system.

-	**Compression Software** removes redundant information within files making them smaller in the process, take multiple files and compress them into the same archive, which can be uncompressed late and the original files retrieved. This is what allows you to create a .zip file. 
-	PDF viewing and creating is software that is designed to create a document format that would look identical regardless of the user’s computer platform, such as Windows, macOS, UNIX or Linux by running the .pdf reader. If you're sending an important document, like a resume, it's best to send it as a PDF.

## Web Browsers
Web browsers allow us to access the Internet to connect ourselves with the world around us. Knowing how to configure and use web browsers can help reduce the risks of contracting malware or accidentally releasing personal information.
-	Configuring Web Browsers should be done periodically to ensure that the settings are still correct and that everything is properly updated.
-	Managing Internet Browser Versions is really easy for most browsers because they are already configured to automatically update by default, meaning all the security and patches are constantly installed for you without your input.
-	Legacy Browsers are older versions of web browsers.
-	A **plugin** is a piece of software that gives browsers additional functionality.
-	Managing Plugins, Add-Ons, Toolbars and Extensions isn’t too complicated considering that everything is automated these days. When adding extensions allows your browser to have more functionality. However, the only drawback is that having many plugins will slow your browser down.
-	Configuring Proxy Settings help manage fulfilling requests, blocking access to websites based on potentially dangerous or inappropriate content and log all traffic.
-	Proxy server is a server that makes request on behalf of other computers. They act like the gatekeeper for access to the Internet.
-	Basic Browser Security has automatically configured for us by default. If you are more familiar with these settings, they can be configurated further to enhance the security features that are already in place.
-	Managing Cookies and Cache could enhance or limit your web experience. A cookie is a plain-text file that a web page stores on your hard disk for tracking purposes, 99% of cookies are harmless. Cookies perform useful functions such as remembering your preferences when you return to a website you visit often. There are only two security risks involved with cookies, Privacy threat and Security threat. Privacy because it carries PII and Security because it could deliver information to malicious software users trying to fish for your data.
-	Blocking Scripts prevents web browser from running scripts. Scripts work by downloading and displaying web pages, which are essential to the function of a website. When a blocking addon is installed it prevents client-side-scripting, meaning it prevents executing client-side scripting on client machines. Scripts are not bad by nature, they a allow transfer or data between a user’s computer to the server (the computer is connected to through the browser) that the machine is connected to either retrieve data or send it.
-	Controlling Pop-Ups can help optimize and secure useful functions, such as displaying the amount of time, you’ve been logged in at a Wi-Fi location that charges you by the minute or displaying details for you to download a file you want, while blocking popups from sites that are not try worthy.
-	A pop-up is an extra, small browser window that appears automatically when you display a certain web page or click a certain button on a page.
-	Visiting Secure Websites is very important when you are visiting websites that require PII such as a username and password or credit card information. When looking at Websites first you must check to see if a site has **https://** and have a LOCK ICON on the address bar.
-	A Secure Website is one that uses SECURE SOCKET LAYER (SSL) or Transport Layer Security (TLS) to encrypt transmissions between the server and the client.
-	Certificate Authority is a security certificate that shows that the web page has been notarized to be authentic and safe for public use. A security certificate contains information including a serial number, the person or organization that issued the certificate, and a range of dates for which it remains valid.
-	Private Browsing comes in handy when you are visiting a site where safety may be questionable, the benefits of InPrivate Browsing (Microsoft Edge) or Incognito (Google Chrome) is that it doesn’t store history, passwords, login information, temporary files and cookies.

# Summary
In this chapter we learned of the different programs or applications that we may use and some that allow us to connect to the broader world around us. We learned how to configure such software, compare and contrast it amongst other software, while making sure that we keep what we need and do not need. We also learned how to install and implement utility software that would help protect our devices to allow use to securely browse the web or identify secure sites. Although applications make our lives easier, it is good to know what they are doing, what information they are transferring and also how to maximize the functionality of this software.
