---
id: "ch04-operatingsystems"
title: "Ch. 04 - Operating Systems"
---
# Operating System Fundamentals
When it comes to computers there 3 major Classifications of Software: Operating Systems, Applications (Programs) and Drivers.
-	**Operating** System (OS) provides an environment for software to execute commands and control peripherals. It provides an interface which users can send commands and receive feedback from the computer.
-	**Applications** (programs) are pieces of software to accomplish a particular task. For example: Microsoft Word is an application used to create text documents.
-	**Driver** a specific application written for the purpose of instructing a particular OS on how to access a piece of Hardware. Hardware devices such as printers, network cards, etc. need drivers to allow the OS to understand properly how the hardware works and what it is able to do.

## A Brief History of Operating Systems
**(NOT TESTED ON THIS!!)**
Understanding a brief history of Operating systems will allow users to appreciate their	development and knowing the foundations of modern OS’s came from either UNIX or Xerox 	Star.
-	Pre-OS period required everything that an OS provides us with today to have been manually entered. The first computer that was developed was called the Electronic Numerical Integrator And Computer (ENIAC). It was developed by U.S government, in partnership with the University of Pennsylvania in 1945.  
-	The Early Days in 1954 IBM developed the first computer programming language: Fortran, which allowed programmers to create simple commands that told the computer to execute several commands.
-	Standardization came to fruition in 1969 when a group of engineers from Bell Labs came out with UNIX, which was easier to understand and used a new programming language called C. Before this, an operating system was usually written for a specific computer. Since Bell Labs could not make money on UNIX, due to monopoly laws, they decided to distribute it for free which resulted in its popularity. Users were also free to make modifications to the OS, which made UNIX open-source. IBM developed its first PC in 1981, which came bundled with Microsoft Disk Operating System (MS-DOS).
-	The first window-based graphic user interface (GUI) was called Xerox Star (developed by the copier company). Star was developed in 1981 and had some of the basic features that we take for granted (Mouse, Email and Internet access). In 1984 Apple licensed Xerox Star, made improvements and introduced the Macintosh computer. Microsoft followed with Windows 3.0 which was based on the MS-DOS architecture in 1990. In 1991 Linux, written by Linus Torvalds, was first released which had its foundations in UNIX.

## Operating System Vocabulary 
Below are some terms that should be known for Computer Literacy:
-	**Kernel** is the central part of the OS which controls the all the actions of the OS i.e. controlling which processes get to the CPU and memory, and translating between hardware and software components in the computer.
-	**Version** is a particular revision of the software, described by a number, which indicates the new product in relation to the old one.  
-	**Source code** defines how a piece of software works.
-	**Shell** is a program that runs on top of the OS which allows the user to issue commands through menus or an interface, making it easier to use. i.e. GUI.
-	**Graphic User Interface** allows a user to use a mouse, touchpad, or another mechanism (keyboard) to interact with the computer to issue commands, by clicking on icons, graphical images and other methods other than text.
-	**Cooperative Multitasking** is a multitasking method that depends on the application itself to be responsible for using the processor and then freeing it for access by other applications.
-	**Preemptive Multitasking** is a method in which the OS allots each application a certain amount of processor time and then forcibly takes back control and gives another application or task access to the processor. For example, if an application crashes the OS takes control of the process away from the locked application and passes it on to the next application.
-	**Multithreading** is the ability of a single application to have multiple request (threads or jobs) into the processor at one time.
-	**32-Bit** means that an OS that is 32-Bit can run on a 32-Bit processor (CPU).
-	**64-Bit** means that an OS that is 64-Bit can run on a 64-Bit processor only, however both 32-Bit and 64-Bit applications can run on this OS.

## Basic Functions of Operating Systems
-	**Coordinating Users and Hardware** is one of the seamless responsibilities of the OS. Most of us don’t really give much thought to the different types of hardware needed to execute what seems to be simple commands. OS talks to hardware for us, through device drivers, which are specialized programs that tells the OS how to talk to the hardware.
-	**Providing an Environment for Software** is another job the OS does. It gives software applications one standard interface to do work or work on. If an application is developed for Windows 10, it should work on all Windows 10 computers regardless of the hardware.
-	**Providing Structure for Data Management**: the OS to give users a structured was to store and access files and applications, through the use of system directories (often called folders) to store data in a hierarchical manner.
-	**Monitoring System Health and Functionality** is a wonderful feature of the OS, which allows it to monitor the health of your system’s hardware giving the user an idea of well it is performing. This feature is usually accessed through third party applications or the OS’s system utilities.

## Types of Operating Systems
**(ONLY NEED TO REMEMBER 5 CATAGORIES OF OS for the Exam!!)** 

There are OSs built specifically for servers, workstations, mobile devices, routers, home entertainment systems, etc. and each designation comes with its own unique features.
### Workstation OS
Workstation Operating Systems  were designed to let users perform tasks on a single machine.  

Examples of workstations are Desktops and Laptops.

#### Linux 
-	Linux was developed in 1991 by Linus Torvalds. Linux isn’t an Operating System; it is a Kernel which is the core of an Operating System. To turn it into an OS, developers would add features to it. When all of the features are added to the kernel it becomes a Distribution or Distro which becomes an Operating System.
-	Linux versions are called Distros (short for distributions). These distros are usually branches one of three families: Debian, Slackware or RPM which were earlier modified versions of Linux distros built in 1993-94. Most Linux distros are free or charge, however there are some distros that are designed for commercial use and cost money, for example: RedHat Linux.
-	Linux Usage is popular on servers and Internet devices. Programmers or hardware developers enjoy using Linux because it is easy to maintain compared other Operating Systems and can be customized to meet their needs.

#### macOS
-	Mac was introduced in 1984, through some heavy marketing. It became very popular due to its easy to use, GUI.
-	macOS Versions have evolved over time, from various naming schemes to adding features and finally creating different OSs for different devices. An example of this would the macOS for workstations and iOS for Mobile devices.
-	macOS Usage has been very steady due to the fact that they have loyal users. Most Mac users prefer this device because the high quality hardware and the "It just works" philosophy of the OS. 

#### Windows
-	Windows is the OS with the largest install base in the desktop and laptop PC computer market.
-	Windows versions also started from a seemingly random naming scheme, until ultimately it stayed with the numbering system. Much of Windows' rise in terms of popularity is due to it being common in schools and businesses, so it is what many people are most familiar with.
-	Windows usage has increased due to the fact that the OS is pre-installed in every PC around. Another reason for its popularity was the fact that Microsoft decided to mainly focus only on OS development and other companies focus on manufacturing the hardware components.

#### Chrome OS 
-	Chrome OS was developed by Google and launched in 2011 as a lightweight OS meant to perform simple tasks for users today.
-	Chrome OS Versions have not had any significant name changes. Chrome does come in 32-Bit or 64-Bit OS architecture with light system requirements.
-	Chrome OS Usage is designed for device called netbooks. Netbooks are similar to Laptops, but only smaller and have light resources. Most things stored on a Chromebook is stored in the cloud due to the device’s lighter hardware architecture.

### Server OS
Server Operating Systems are in the business of providing resources to clients on a network, by handling multiple concurrent connections over a network.

-	Linux-Based OSs consume roughly about 10-20 percent of the market. Their appeal is they can be distributed as full-enterprise product or can be specialized to meet the need of the consumer.
-	Mac-Based is distributed as an add-on to the macOS design. The target audience are small businesses, schools and individuals due ease of use.
-	Windows-Based OS named Windows Server, consumes roughly 80-90 percent of the market. The recipe for Windows Server’s success is its familiarity to the regular Windows OS.

### Mobile OS 
Mobile Operating Systems have their own OS which is not the same as the ones mentioned before, which are typically for the larger devices. Google, Apple and Windows are the three major players in the mobile device OS market.
-	**Apple iOS** one of the dominant players in the market running on the iPhone and iPad mobile platforms. It consumes roughly about 40 percent of market. iOS is built on the same foundation as Apple’s desktop OS.
-	**Android** is another dominant player in the Mobile devices market due to the multiple vendors that support it. Android was its own company until it was purchased by Google in 2005, it was launched in 2008 on its first mobile device.  
-	**Windows Mobile** started in early 2000 as the Pocket PC, could have easily dominated the mobile device market. However due to various name changes and poor targeted marketing schemes, it could no longer compete with Android and iOS devices. Windows Mobile was retired in 2015.

### Virtual OS 
-	Virtual Operating Systems allow multiple OSs (called Virtual Machines) to run on one physical machine at the same time, while still being bound by the physical characteristics of the machine on which they reside.
- Virtual Machines allows users to have multiple "virtual computers" to run different operating systems for testing software without requiring them to purchase multiple hardware devices.
-	The **Hypervisor** is a software that allows multiple operating systems to share the same host and also manages the physical resource allocation of those virtual OSs. There are 2 types of Hypervisor:
    -	**Type 1**: Also known as *Bare-metal virtualization*, is basically the operating system for the physical machine, it does not have a host OS involved and the system is dedicated to support virtualization. 
    -	**Type 2**: Also known as *Client-side virtualization*, where multiple OSs are managed on the client machine as opposed to on a server. The downsides of type 2 are that the host OS consumes resources such as processor time and memory, and a host OS failure means that the guest OSs fail as well. 

### Embedded OS 
Embedded Operating Systems are designed to be small and efficient, typically only being responsible for a single task. The upside is that they require very few hardware resources but the downside is there is little to no flexibility. An example of this kind of OS is Firmware.

# Managing an Operating System
Although operating systems have evolved over the years one thing has remained clear and true for all of them, once you use one OS, it will be relatively easy for you to figure out how to use another.

## Managing Features and Interfaces

When working on an any OS, a user must make sure to manage the systems hardware and software by configuring all of the settings. When covering software, we typically mean managing user accounts and software related to the user accounts. When we begin to look into hardware, we look more at the peripherals that are internal or external to the computation device.
-	**User Account Management** is pretty much the configuring the behavior of different user accounts. A user account is an identity by which a user is identified by when using the OS. There are 3 common types of user accounts that can be created, Administrator, Standard and Guest user. Administrators typically have access to the whole system; Standard usually have access to some of the system and Guest have the most limited access to a system. 
-	**Access Control Management** is an idea that limits user accounts to only have the right level of system access to perform the necessary tasks to complete their job. This prevents catastrophic system changes, including accidentally installing malware.  
-	**Application Management** makes our computers more usable; OSs have an internal system registry that keeps track of the installed applications. Making changes to this registry could be fatal to your entire system if you do not know what you are doing.
-	**Process Management** is one of the many jobs that an OS does. Although we are aware of the processes that happen when we open applications, it should be noted that there are also other programs processing in the background, which are essential to the operation of the OS. For example, Task Manager can be used to display all of the applications working in the background and also kill those applications by clicking the “End Task” button on the menu. 
-	**Service Management** is the process of managing the services provided by different software packages that add more features to the functionality of a particular OS. 
-	**Device Management** is found in Settings under Devices. This is the place a user goes to manage basic settings, remove external peripherals, or add a printer or scanner. Here you can also install, update and roll back hardware drivers. 
-	**Disk Space Management** is the management of the various internal and external storage drives. In windows, this menu can be accessed by going to the Disk Management menu, which would list all the available drives mounted on the machine and detail its storage capacity, along with the formatting options. 
-	**Memory Management** is typically done by the OS, however if you were to run out of RAM you will have to configure the systems virtual memory. Managing virtual RAM is typically done by simply allocating a portion of your local or internal hard drives storage for virtual memory. The file that used for virtual memory is called a page or swap file. 

## Managing Folder and File Structures
Before an OS begins managing folders and creating file structures, the hard drive needs to be 	partitioned, which is a creating a logical area on the drive. Then formatted to the right file 	system, which is laying down the tracks for data storage. In short, the partition creates the giant 	space, and the formatting lays down tracks and sectors that are the right size to store data.
-	**Disk Space** and **File Access**: File systems organize the directories (folders) and files and keep track of their structure. This determines how your data is saved on the disk and how its retrieved.
-	**Filenames** and **Directories** are the various limitations that file systems have i.e. file name length, characters used, case sensitivity, etc.
-	**File Metadata** and **Attributes** is information related to the file i.e. file name, size, last time it was save and its attributes mainly pertain to how the file is accessed, whether the file is read only, hidden, or if the file has been changed sine the last time it was backed up.
-	**Security** is a built-in feature, which are a set of permissions that can be selected by the system administrator.
-	**Journaling** is a fault-resistance technique in which the system saves a back up of the changes to a file, on a separate location (called a journal) from the original file location were the file was stored. In the event that changes made were lost due to power loss, the journal file can be used to retrieve that data.
-	**Navigating a File Structure** is simply done by accessing the root file. In Windows, this is done by accessing the C: drive which is the root drive. In the root the File Structure (Directory tree) is displayed, by programs (applications), system (Window OS) and user files.
-	**Viewing File Metadata** is done by accessing File Explorer (on windows). The Properties window shows additional details such as size, security, date, etc.
-	**Manipulating Files and Executing Programs** is typically done by right clicking the file and selecting on of the options on the drop menu (Windows).

#### Common File Manipulations 
-	**Open** opens the file in the default program for that file.
-	**Edit** opens the file in the default editor for that program.
-	**New** creates a new file of the same type in that location.
-	**Move** takes the file from one folder and moves it to another.
-	**Copy** makes a copy of the file on the clipboard (Temp storage for windows).
-	**Cut** copies the file to the clipboard, removing it from its current location.
-	**Paste** will move whatever has been clip boarded to the location you decided to send it to.  
-	**Delete** removes the file from the directory (folder) to the Recycle Bin.
-	**Rename** changes the metadata for the file by giving it a new name.

# Summary
In this chapter we mentioned the various OSs that are in the market. We also covered a brief history of the OS, its necessity and relation to the Hardware that supports. The structure of the OS files and systematic of how OSs store data in the hard drive was also mentioned in this chapter. We finally concluded the chapter with managed options performed by the OS and the user configuring the OS. It is clear that the OS is very important to our interaction with computers today, making tasks that would take considerable amounts of time to perform, executing them in seconds.
