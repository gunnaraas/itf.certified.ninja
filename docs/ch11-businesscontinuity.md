---
id: "ch11-businesscontinuity"
title: "Ch. 11 - Business Continuity"
---
For business-critical applications and data, it's essential that we keep the computers (or servers) running them powered on, connected to the network, with their data protected from hardware failure. Taking preventative measures to protect our systems from failure can be referred to as "continuity". However, things don't always go as planned, and it's up to IT Professionals to solve computer issues. Whether it's in the field, or in your personal life, having strong computer troubleshooting skills will greatly help you be a computer master! 

## Understanding Business Continuity
Business continuity focuses on keeping business critical IT systems up and running consistently. Ensuring business continuity is a core responsibility of any IT professional. 

### Fault Tolerance & Contingency Planning 
All systems vulnerable to faults or failure. Hard drives can stop spinning, networks can go offline, and power outages can occur. Whenever possible, we should design our systems to be able to tolerate hardware failures, so that one device failing (a single point of failure) doesn't take everything down with it.

Contingency planning allows us to think and plan ahead, anticipating and preparing for any faults that may occur. The basic steps of contingency planning are as follows: 
1. Perform a business impact analysis which helps the user/ business owner understand what impact the business would have if components fail.
2. Identify preventive systems meaning, what system the company has in place to prevent issues from happening, starting with Environmental factors and finally moving on to computer-related items such as power backups and security policies.
3. Develop a recovery plan that details who is responsible for specific actions and what is the chain of authority.
4. Test the recovery plan through simulations, to identify flaws and inspire revisions to the plan.
5. Set up a maintenance and review schedule to allow the plan to continuously change and adapt to changing circumstances.
6. Implement Training to ensure that responders know what to do and that people understand their roles in the event of a crisis.  

###	Replication and Redundancy
Replication and redundancy are two ways we can design systems to be fault tolerant. 

If we're practicing *replication* - that means that we have a separate functional system that can be used in the event of system failure. This might mean a separate, identical server we can switch to, a separate network to connect to if one fails, etc. The problem with relying on replication is the cost - as effectively doubles the amount of equipment and maintenance needs our IT infrastructure requires. 

If we're practicing *redundancy* - that means that we have designed our systems in a way that it's able to handle partial failure (one HDD in a multi-drive server failing), a network cable in a large network being broken, etc. This allows us to design our systems to be fault tolerant, so that systems remain online without any downtime or data loss while the issue is resolved. Redundant systems have a much lower cost of implementation compared to replicated systems. 

#### Data Redundancy 
**RAID** (Redundant Array of Independent Disks) is a common data redundancy implementation. This allows us to combine multiple physical storage devices into one logical (virtual) disk, with varying amounts of speed and data redundancy benefits. RAID has different versions, 3 of which you are required to know for this exam:  

| RAID Version | Primary Feature       | Description | Disks required |
| ------------ | --------------------- | ------------| -------------- |
| RAID 0       | disk stripping        | Splits data between multiple drives with no redundancy. One disk failing means all data is lost. | 2 or more |
| RAID 1       | disk mirroring        | An identical copy of data written on one drive is written (replicated) on another. While providing the highest level of fault tolerance, this is the most expensive to implement. | Even number    | 
| RAID 5       | stripping with parity | Creates parity files with information about the data on other disks that can be used to recreate lost data if a disk fails. Allows for 1 drive to fail without data loss. | 3 or more      | 

![RAID 5 Diagram](/assets/images/ch11-raid5.png)

#### Network Redundancy 
There are numerous ways we can design networks to be redundant. One method is the *mesh network topology*, where devices have multiple redundant connections that devices can use if one single connection breaks. 

![Mesh Network Topology](/assets/images/ch11-meshnetwork.png)

#### Power Redundancy 
Power does not always work, but there are certain things we can do to help protect critical devices (like servers and network equipment) against unexpected power outages.
- **Uninterruptible Power Supplies (UPS)** are designed to protect everything from power surges, power sags and power outages. Most UPS are used on servers and should be periodically tested to make sure that the battery is still operational and in working order.
- Some very important servers (like those in data centers) have backup generators with weeks of fuel on site ready in the event of long-term power outages (like those caused by natural disasters).

## Data Backups 
Data Backups can either be a full back-up or archive of data. Full back-up includes a restorable copy of any set of data that is needed on the system. Archived data is any collection of data that is removed from the system because it’s no longer needed on a regular basis.  Data backups also require a backup policy which dictates what information that should be backed-up and how it should be backed-up.

#### Understanding the Importance of Backups 
Backups help ensure that data that could be important to a business or years of personally share memories are not lost or forgotten due to a hard drive crash or a virus.

#### Understanding How Backups Work 
Most backup software works by at the data attributes of the piece of data being backed up. In Windows, all data has a metadata attribute known as an **Archive Bit**. This bit is a binary (1 or 0) representation of if the data has been changed since it was last backed up. Another way to think of this is a "Has this been archived? bit".

#### Understanding Backup Options 
Backup options include the methodology in which you want to back-up all the data.  For example, do you want to configure your back-ups using an OS based utility, Network or Cloud. In addition, are you storing the back-ups locally or externally and how frequent will you be performing these back-ups?

#### Types of Backups: 
- **Normal or Full**: Backs up all the selected files and clears archive bit meaning it removes from the functioning system. It is the fastest to restore but takes longer to back-up.
- **Copy**: Backs up selected files but doesn’t clear archived files from the system.
- **Incremental**: Backs up selected files only if they were created or modified since previous backup and resets the archive bit. This is faster to backup but slower to restore.
- **Differential**: Backs up selected files only if they were created or modified since the previous backup, but it does not clear the archived data.
- **Daily**: Backs up files that were created or modified today. It doesn’t look at the archived bit but only the date when the file was modified.
- **System image**: is backup that makes an exact copy of the entire hard disk, including operating system and application files.

#### Backup Locations 
- *Local backups* would include storing the data on an external storage device or have some utility configuration within your Operating system. Although the data transfer access would be the fastest. It would require the user to make sure that it remains secure.
- *Network backups* would include storing the data externally which typically involves using a networking cable, or storage through a server or NAS configuration of some sort. This configuration would require network access of some sort.
- *Cloud-based backups* would be paying a monthly service fee or annual fee to have your data be stored externally through an internet provider. This will take the user’s responsibilities for maintaining and securing the data. However, access will be limited to requiring internet access.

The more important that data is, the more it will often change, the more often you will want that data to be backed up. After running a backup, it's also important to make sure that the backup was successful and can be restored if needed.

## Disaster Recovery
Disaster recovery is a plan that will identify the priorities to take in the event of a disaster. Typically includes efforts such as controlling the disaster before beginning recovery, next follow the priorities outlined by the contingency plan and making sure to tackle the biggest problems before dealing with the smaller ones.

# Exploring Computer Support Concepts 
Computer support is similar to troubleshooting. When it comes to troubleshooting, a user support will need to understand the theory and process of troubleshooting, which would include basic concepts and resources that apply in most situations.

## Understanding Troubleshooting Theory
The "Troubleshooting Theory" describes how IT Support staff can easily and methodologically resolve computer issues. 
We can break the troubleshooting theory into these 8 steps:
1. [Identifying the Problem](/docs/ch11-businesscontinuity#identifying-the-problem)
2. [Research Knowledge Sources](/docs/ch11-businesscontinuity#research-knowledge-sources) (if necessary)
3. [Establish a Theory of Probable Cause](/docs/ch11-businesscontinuity#establish-a-theory-of-probable-cause) 
4. [Test the Theory](/docs/ch11-businesscontinuity#test-the-theory)
5. [Establish a Plan of Action](/docs/ch11-businesscontinuity#establish-a-plan-of-action) 
6. [Implement the Solution](/docs/ch11-businesscontinuity#implement-the-solution) 
7. [Verify Functionality](/docs/ch11-businesscontinuity#verify-functionality) 
8. [Document your work](/docs/ch11-businesscontinuity#document-your-work)

### Identifying the Problem
You might receive a ticket from a user saying "Help! My computer isn't working!" This could mean any number of things. Maybe nothing happens when they press the power button, maybe they forgot their password, or can't connect to the internet. It's your job to narrow down what exactly the problem is before trying to solve it. 

There are a number of questions you can ask, including but not limited to: 
- Can you show me the problem?
- How often does this happen?
- Has any new hardware or software been installed recently?
- Has the computer recently been moved?
- Has someone who normally doesn’t use the computer used it?
- Have any other changes been made to the computer recently?

Many operating systems also include troubleshooting wizards that will check a computers configuration for common issues, repair them (if possible), and give you important information to help pinpoint the problem. 

### Research Knowledge Sources 
You're not expected to know the solution to every possible computer issue, but you should know how to utilize the many different knowledge sources available to help you learn from other's experience. It's sometimes said that one of the most important skills for an IT professional to have is knowing how to use Google. 

Examples of knowledge sources include: 
- Searching internal documentation (knowledgebase) and ticketing systems (issues that have been resolved before)
- Manufacturer's website 
- Technical support forums (Reddit, LTTForum, Overclockers, Microsoft Answers, cNet)
- Search Engine [(using *operators* can help narrow search results)](https://blog.tryhackme.com/google-fu/) 
- Asking a more experienced coworker for help  

### Establish a Theory of Probable Cause 
Once you've narrowed down the problem to a specific issue, you should try to determine the cause of that problem. Information gained through steps 1 and 2 should help narrow this down, but you'll get better at it as you gain more experience and are exposed to more troubleshooting scenarios. 

:::info Check the simple stuff first!
It's always a good idea to check the simple stuff first! 

For example: if a user says nothing happens when they press the power button, check that the computer is plugged in before testing if it's a faulty power supply or motherboard. 
:::

### Test the Theory 
If you think you've discovered the issue, you can test your theory. You should always test this before making changes to a users computer. 

Examples: 
- If a user can't connect to a certain website, ask if they can connect to a different website that you know works. If it's a trusted site, you can also try connecting. 
- If you think it's an issue related to temporary files, settings, or memory issues, asking the user to restart the computer can help resolve many issues.  

### Establish a Plan of Action 
If your theory has proven correct, you can establish a plan to correct the issue. If you're making any major changes to a users device, make sure they have all important data backed up. 

If your theory was not correct, you can continue testing other theories, or escalate the issue to a more experienced coworker. 

### Implement the Solution 
This involves implementing the solution your research or experience has led you to believe would correct the issue. If the implementation of the solution is above your skill level, you can also escalate this to a more experienced coworker with all information gathered during this research. You should always try to complete as much of the troubleshooting theory as you can before escalating.

### Verify Functionality 
After implementing the solution, you should make sure that the issue has been resolved, and that your solution hasn't created any new issues. This can include connecting to a website, opening some programs, etc. 

This step might also include setting up preventative measures to prevent this issue from happening again in the future. Examples would include installing anti-malware or setting up an ad-blocker for a user that is not practicing the Security Best Practices learned about in Ch. 10.

### Document your work 
Most IT departments will have some sort of ticketing system that you are required to document any issues you help resolve. You should try to be as thorough as possible in the information you found or steps you did to complete the issue. This will make it easier for you or others to find the correct steps to resolve the problem if the same issue happens to someone else. 

In addition, some departments will have a FAQ, knowledgebase, or wiki that you can add this information to. If available, it's a good idea to add any useful information about solving a specific issue to this base. 

## Troubleshooting Vocabulary and Utilities  

- **POST Code:** A code given by the BIOS to indicate a specific startup issue, usually related to hardware failure. Depending on the severity of it, this can be displayed on screen, be presented as a series of beeps, or require a special expansion card called a POST card to identify. 
- **Blue Screen:** Sometimes called the *Blue Screen of Death*, this is an error message that is generated by Windows after the operating system has crashed entirely. 

- **Safe Mode:** Boots the Operating System in an environment where only the bare minimum services and applications are available. This is useful for malware removal, driver issues, and other advanced repairs. 
- **Windows RE (Recovery Environment):** Special startup option that allows a technician to access some troubleshooting and recovery utilities, including the command line, without actually entering the operating system.
- **MSCONFIG (Startup Configuration Utility):** is an administrative program that lets users and technicians manage and troubleshoot the startup process.
- **CHKDSK** (pronounced Check Disk): is a command line utility that checks a hard drive for errors and makes repairs to prevent data loss. This is not used on devices that only use an SSD. 

# Summary
This chapter covered two key topics; business continuity and troubleshooting support. Under business continuity it mentioned steps taken in the event of an issue and what plan of action to take to continue business as usual, while dealing with the problem separately. Troubleshooting became necessary in the event of how to deal with the problem, by incorporating steps on how to address, deal, and prevent the problem from happening again.
