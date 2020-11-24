---
id: "ch11-businesscontinuity"
title: "Ch. 11 - Business Continuity"
---
This chapter will cover two topics business continuity and troubleshooting support. Business continuity means trying to prevent problems from happening in the first place and planning for when the inevitable hardware failure or software loss happens. Troubleshooting support are the techniques and best methods to isolate and fix the problem to get the computer up and running as quickly as possible.

# Understanding Business Continuity
Business continuity focuses on keeping systems up and running consistently, as often as the users need to access them. There are two major concepts when it comes to business continuity: Fault tolerance and Disaster recovery.

## Fault Tolerance
Fault Tolerance is the ability to lose a component or data and still have a functional system. 		Fault tolerance systems help protect against single points of failure.

Contingency Plan is a plan for action in the event of a problem.
1. Perform a business impact analysis which helps the user/ business owner understand what impact the business would have if components fail.
2. Identify preventive systems meaning, what system the company has in place to prevent issues from happening, starting with Environmental factors and finally moving on to computer-related items such as power backups and security policies.
3. Develop a recovery plan that details who is responsible for specific actions and what is the chain of authority.
4. Test the recovery plan through simulations, to identify flaws and inspire revisions to the plan.
5. Set up a maintenance and review schedule to allow the plan to continuously change and adapt to changing circumstances.
6. Implement Training to ensure that responders know what to do and that people understand their roles in the event of a crisis.  

###	Replication and Redundancy
- Replication is making a full copy of data, computer or network that is being considered. Replicated networks are called hot sites. The only downside to replication is cost, meaning it’s very expensive.
- Redundancy is a step down and least expensive from replication because it uses special devices or techniques to help a system keep running for a short period of time, until the original problem can be fixed.
- Data Redundancy are techniques that can be used to increase hard drive capacity, improve read and write speeds while having extra protection against disk failures.

- **RAID** stands for Redundant Array of Independent Disks, which incorporates multiple physical hard disks working together to increase performance, increase reliability, or both.
     - RAID 0 also known as disk stripping, in which two drives are combined to create one logical volume with each drive having equal amounts if space used on each drive. However, if one drive fails then all of the data stored is lost.
     -	RAID 1 also known as Disk Mirroring, in which data is simultaneously written to two separate drives.  If one fails, the other contains all of the data and will become the primary drive. Disk Mirroring does not help with access speeds and cost twice as much of a single drive.
     -	RAID 5 combines the benefits of RAID 0 and RAID 1, creating a redundant stripped volume set. This configuration requires a minimum of 3 drives. It doesn’t mirror the redundant data; however, it pairs that data on each hard drive for restorative purposes. If one drive fails, the system will continue to operate, but if additional drives fail then, there would be a catastrophic loss of all data in the array.

- Network Redundancy is configured to avoid a single point of failure.
- Power Redundancy helps protect against unexpected power outage.
- Uninterruptible Power Supply (UPS) are designed to protect everything from power surges, power sags and power outages. Most UPS are used on servers and should always be periodically tested or checked to make sure that the battery is still operational and is in working order.
- Data Backups can either be a full back-up or archive of data. Full back-up includes a restorable copy of any set of data that is needed on the system. Archived data is any collection of data that is removed from the system because it’s no longer needed on a regular basis.  Data backups, also require a backup policy which dictates what information that should be backed-up and how it should be backed-up.
- Understanding the Importance of Backups helps ensure that data that could be important to a business or years of personally share memories are not lost or forgotten due to a hard drive crash or virus.
- Understanding How Backups Work means looking at the data attributes of the piece of data being backed up. In windows, data being prepared form backing up would have its attributes be modified in preparation for Archiving. Archiving would modify the data’s bit from 1 (on or active) to 0 (off or nonactive) bit.
- Understanding Backup Options include the methodology in which you want to back-up all the data.  For example, do you want to configure your back-ups using an OS based utility, Network or Cloud. In addition, are you storing the back-ups locally or externally and how frequent will you be performing these back-ups?
- Backup Types are the various options that data back-up utilities may offer. [Remember not all Back-up utilities back-up all the data that needs to be backed up.]
- Normal or Full: Backs up all the selected files and clears archive bit meaning it removes from the functioning system. It is the fastest to restore but takes longer to back-up.
- Copy: Backs up selected files but doesn’t clear archived files from the system.
- Incremental: Backs up selected files only if they were created or modified since previous backup and clears the archived data. This is faster to backup but slower to restore.
- Differential: Backs up selected files only if they were created or modified since the previous backup, but it does not clear the archived data.
- Daily: Backs up files that were created or modified today. It doesn’t look at the archived bit but only the date when the file was modified.
- System image: is backup that makes an exact copy of the entire hard disk, bit by bit.
- Backup Locations includes having your backup locations be either local, network or Cloud based.
- Local: would include storing the data on an external storage device or have some utility configuration within your Operating system. Although the data transfer access would be the fastest. It would require the user to make sure that it remains secure.
- Network would include storing the data externally which typically involves using a networking cable, or storage through a server or NAS configuration of some sort. This configuration would require network access of some sort.
- Cloud based, would be paying a monthly service fee or annual fee to have your data be stored externally through an internet provider. This will take the user’s responsibilities for maintaining and securing the data. However, access will be limited to requiring internet access.
- Frequency and Scheduling data backups will depend on how important the data meaning, the more important that data is, the more it will often change, the more often you will want that data to be backed up.
- Verifying and Testing Backups just to make sure that all the data being backup has successfully been backed-up and can be restored in its time of need.

## Disaster Recovery
Disaster recovery is a plan that will identify the priorities to take in the event of a disaster. Typically includes efforts such as controlling the disaster before beginning recovery, next follow the priorities outlined by the contingency plan and making sure to tackle the biggest problems before dealing with the smaller ones.

# Exploring Computer Support Concepts 
Computer support is similar to troubleshooting. When it comes to troubleshooting, a user support will need to understand the theory and process of troubleshooting, which would include basic concepts and resources that apply in most situations.

## Understanding Troubleshooting Theory
The basic theory behind troubleshooting includes pinpointing the problem, always backing up data, establishing user priorities and finally documenting everything. Bellow includes the 		troubleshooting theory broken into steps:
- Identifying the Problem means defining the problem before beginning to solve it and in computer systems there are 4 areas to look into for issues.
- Collection of hardware Pieces, simply put, meaning understanding how each hardware works within a system before looking for issues.
- Operating System meaning understanding the operation system how it runs normally before going in a working on it to identify problems and solve them.
- Application Similar to the OS, requiring a user to understand how the app or program or application works before going in to re configure it.
- Computer User meaning asking enough question from the user to understand how they use the device or operate the machine, which would help indicate signs of misuse.
- Talking to the Customer can help define what the problem is, however you still need the customer’s help because they know what went on before the support specialist came in. It’s important to instill trust with your customer by taking note and believing everything that they say but also remaining a healthy dosage of skepticism. During show and tell, take this time to pay attention and observe the problem. Bellow are a few questions that one could ask, that would help make working with the customer easy and solve the problem faster.
    - Can you show me the problem?
    - How often does this happen?
    - Has any new hardware or software been installed recently?
    - Has the computer recently been moved?
    - Has someone who normally doesn’t use the computer used it?
    - Have any other changes been made to the computer recently?
- Gathering Information assist the troubleshooter find out everything that might be related to the problem. This gathering step helps the user identify as specifically as possible, what the problem is. It typically involves questions such as: Is anything missing or something changed? What is working and what is not, what methods has the user performed to resolve the problem?
- Determining whether the problem hardware or software can be determined if the device required some form of hardware to be installed (Which would focus the problem to hardware if not then it would narrow it down to software).
- Determining which component is failing (For hardware Problems) typically requires checking if the driver needed to be reinstalled or the device itself is faulty.
- Research Knowledge Sources, If Needed meaning looking through forums and technical community groups for answers if manufacture’s documentation and websites seem to fail you.
- Establishing a Theory of Portable Cause, “what is wrong” helps a troubleshooter develop possible solutions to the problem.
- Question the Obvious if something seems obvious, check it out first before working on more elaborate (complicated) theories.
- Eliminating Possibilities helps narrow down the scope of possible solutions, which would in turn identify what is really causing the problem and determine whether there are other factors affecting the solution.
- Divide and Conquer meaning focus on issue at a time and separate I from other problems, which reduces the complexity of the task at hand.
- Testing the theory to Determine the Cause helps confirm your theory and begin to move to the next step which would be fixing the problem.
- Check the Simple Stuff First, technicians overlook this because they assume it couldn’t be the problem (don’t fall for this).
    - Is it plugged in?
    - Is it turned on?
    - Is there physical damage?
    - Is the system ready?
    - Do the chips and cables need to be reseated?

- Check to See Whether It’s User Error meaning if the user cannot perform a common computer task then they may need help performing the task. Ask questions that relate to performing the particular task e.g., “Were you able to perform the task?”
- Restart the Computer frees or clears up the memory and starts the computer with a cleared RAM. That sometimes solves the problem.
- Establish a Plan of Action are the next list of possible solutions that you may have to resolving the problem e.g., researching some more, looking over forums, manufactures websites, whatever the next plan is.
- Implementing the Solution meaning figure it out, either by running through all of your ideas to solve the problem or escalating the problem to an experienced technician.
- Verifying Functionality meaning check to see if everything works and if you could make sure to also add in preventative measures to prevent the same problem from happening again.
- Documenting the Work helps you or other technicians learn from that experience, which would save hours of stress troubleshooting the same issue in the future.

## Troubleshooting Examples 
A lot of troubleshooting comes down to having some knowledge and a lot of experience. That said there are four groups of common types of problems when it comes to troubleshooting:
- Computer Won’t Boot can mean anything from a hardware failure to an OS problem. OS is included because, it provides from which all the activities performed on a computer could be done there.
- Nothing on the Monitor could be related to the computer not being powered, issue with the monitor, display, memory, or motherboard. Other methods of diagnosing could include using the POST beeps code and checking of hardware functionality through the lights that are directly on the chassis.
- Black-Screen or Blue-Screen Error Message show one of two situations, failed hard disk drive, OS or some hardware not working -e.g., RAM or some form of incompatibility of some sort.
- Windows Won’t Load is an issue that is commonly related to the system files or the registry. A method of fixing the problem would include booting the system in safe mode, which would bypass all noncritical startup options allowing the user to fix all the noncritical components that are malfunctioning.
- Using Safe Mode allows a Technician to make fixes that are needed to allow Windows to boot normally again.
- Using System Restore allows the user to make backup copies of the important system configuration files once a day called a restore point, which can be referred back to in the case something goes wrong with Updates or upgrades being done to the system, its apps and hardware.
- Using the System Configuration Utility known as MSCONFIG, allows windows users to manage the startup process, which would benefit when user is trying to troubleshoot a startup problem that could be OS based or application based.
- Using the recovery Environment allows a technician access to some troubleshooting and recovery commands. The utility is known as a Windows Recovery Environment or Windows RE for short.
- If macOS Won’t Load it could be a disk error or an OS problem. With disk error the user would see a black screen that a PC’s BIOS may display with a flashing question mark icon. If the problem lies with the Operating System, it would show a prohibition icon which is a red circle with a diagonal line through it, which would display the error code that user or repair technician would look up online.
- Operating System Error Messages can typically be searched online through the manufactures website to what they mean.
- “Windows Has Recovered from A Serious Error” means that something major has caused windows to crash and windows has restarted itself as a result.
- “The System is Low on Virtual Memory. Windows Is Increasing the Size of your Virtual Memory Paging File” is a result of low memory caused by applications utilizing more RAM than the system originally has in place.
- “Data Error Reading/Writing Drive” means that windows is having a hard time reading and writing data from whatever drive that is assigned, a method to resolve the problem would be to run the CHKDSK command, which would scan the drive for any bad sectors and move data to the good sectors while highlighting the bad sectors.
- “A Runtime Error Has Occurred. Do you wish to Debug?” is typically caused by an internet Explorer error message as result of badly written code. Although there are many methods of fixing the problem, one method would be to access the Event Viewer from the Control Panel in the Administrative Tools Section.
- OS Slowdown or Lockup it could be related to one of two things, it could be the related to the system not having enough RAM, and/or if the CPU is being overworked which would result in the computer overheating. A method of resolving such an issue would be look through the TASK Manager, or have the OS throttle to allow the system to cool down, or checking if the issue is not related to faulty fans.
- Application Failures are mostly related to hardware or OS version compatibility issues.
- Application Fails to Install or Fails to Run could be a result of the OS version not supporting the application or a piece of -hardware not being compatible. Method of resolving these issues would be to run the system in Compatibility Mode, be granted system administrator status, have the firewall configured to approve such configurations and disabling the antivirus from detecting new hardware and software installations as a false security threat.
- A Previously Working Application Won’t Work Anymore is most likely a result of an application that has had something be changed from a system level, which could be related to virus infection, limited-time licenses, OS or application update. A method to resolve this issue typically involves, repairing the program or application by going to the ‘Programs and Features’ Utility in Windows.
- Application Crashes maybe as a result of programming error to its own code or compatibility issues. In Windows these problems can be changed through the Task Manager utility window and have the task restarted or rebooted by ending them “End Task” and re-opening the application and restarting it. In Macs, the application has to be forced to quit by choosing the ‘Force quit’ option in the Explorer options menu. In most cases, the application may need to be reinstalled or fixed through the manufacture’s website for troubleshooting methods and installation procedures.
- Device Failure is the process when a device stops work, when the user expects it to be working. There are many reasons to why a device may simply decide to stop working.
- Hardware/Driver Compatibility is one of the major reasons that a device may stop working. Driver contains the instructions that the OS uses in order to make a hardware device work. Although hardware drivers maybe complicated to install manually, most of the time, the OS automatically installs the drive through the plug and play feature. If the user wishes to install it manually however, they should make sure to have the specified device’s name and model number to install the right driver otherwise they will run into more issues.  
- Malfunctioning Input Devices can be caused by a host of unknown reasons however some as easy as damaged cables or the devices themselves may contribute to the problem. Other times it maybe as complex as the input device not being compatible with a particular OS version. In other cases, it may be malfunctioning caused by natural elements such as Dust, water spillage, etc, natural elemental repairs typically require a hardware specialist technician.
- Troubleshooting Network Connectivity simply look into three areas: Network adapter, Log-In account issues and Internet Service provider.
- When looking at the network adapter simply look to see if the driver still functions, cable or wireless adapters are not physically damaged and show some connectivity. Finally look to see if the firewall of the device is not inactivated.
- Account issues, make sure to consult your System or Network Administrator to make sure that nothing is wrong with the account, or if your account has not been locked.
- ISP sometimes may have down times, so its important to check what those times are and check with your local news to see there are not outages that may contribute to your connectivity being delayed for some reason.

# Summary
This chapter covered two key topics; business continuity and troubleshooting support. Under business continuity it mentioned steps taken in the event of an issue and what plan of action to take to continue business as usual, while dealing with the problem separately. Troubleshooting became necessary in the event of how to deal with the problem, by incorporating steps on how to address, deal, and prevent the problem from happening again.
