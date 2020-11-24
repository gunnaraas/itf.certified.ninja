---
id: "ch01-components"
title: "Ch. 01 - Core Hardware Components"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducing Internal Components
Computer components are mostly modular, meaning they can be removed and replaced by another piece of hardware that does the same thing, provided that it’s compatible and fits in the case. For example, if the hard drive in your laptop fails, it can be removed and replaced by another hard drive.

Field Replaceable Units are used to describe modular components that can be replaced.

Cases serves two primary functions:
-	Keeping all the components securely in place.
-	Protecting the components from harm.

# Exploring Motherboards, Processors and Memory
Motherboards, processors and memory are the holy of the computer.

## Motherboards

The **motherboard** connects all the other components of a computer together. It acts like the nervous system of the computer. It is also known as a ‘**system board** or **mainboard**’.

Below is a list of some of the Features and Components that are associated with a motherboard:
-	**Form Factor** - The physical size and shape of a motherboard.
-	**Chipsets**- A collection of integrated circuits that perform functions for the processor. A motherboard's chipset dictate how a motherboard will communicate with the installed components and peripherals.
-	**Processor sockets**- A socket in which a processor or CPU is placed into. Although CPU come varied, their sockets either come in two different types: **Land Grid Array (LGA)** or **Pin Grid Array (PGA)**.
    -	**LGA** – Meaning the socket has a flat surface, which allow a CPU with a flat or smooth surface to make contact with the Processor Socket.
    -	**PGA** – Meaning the socket has, tiny holes on its surface, which allow a CPU with tiny needle pins to make contact with the Processor Socket.
    ![Close-up image of a LGA (left) and PGA (right) processor](/assets/images/ch01-lga_vs_pga.jpg) 
-	**Memory slots**- Slots that are for modules that hold Random Access Memory (RAM) chips. They could be either DIMM (Desktop RAM size) or SODIMM (Laptop RAM size).
-	**Expansion slots**- Slots that are used to install various devices in the computer to expand its capabilities. These slots come in different versions; **Peripheral Component Interconnect (PCI)**, **Accelerated Graphics Port (AGP)** and/or **Peripheral Component Interconnect Express (PCIe)**.

*Click each tab to learn about the three different expansion slot.* 

  <Tabs
    defaultValue="pci"
    values={[
      {label: 'PCI', value: 'pci'},
      {label: 'AGP', value: 'agp'},
      {label: 'PCIe', value: 'pcie'},
    ]}>
    <TabItem value="pci"> <b> Peripheral Component Interconnect (PCI) </b> is the oldest expansion slot type. It is still found on many motherboards for compatibility with legacy devices. </TabItem>
    <TabItem value="agp"> <b> Accelerated Graphics Port (AGP) </b> is an expansion slot used specifically for video graphics cards on motherboards manufactured between 1998 and 2005. It is very unlikely to find an AGP port on a modern motherboard. </TabItem>
    <TabItem value="pcie"> <b> PCI Express (PCIe) </b> is the modern standard for motherboard expansion slots. Unlike earlier expansion slots, this one comes in multiple sizes, noted with an x (pronounced "by") then a number (example: PCIe x16). Many modern motherboards will have multiple PCIe slots. Valid sizes include PCIe x1, x4, x8, and x16. </TabItem>
  </Tabs>

-	**Disk controllers** are locations in which Hard Drive connectors connect to the motherboard. There are 3 main types of controller’s slots: **Integrated Drive Electronics (IDE older slot)**, **Parallel ATA (PATA)** and **Serial ATA (SATA)**.
-	**Power controllers** are special connectors which allows the motherboard to be connected to the power supply. Current Motherboards Come with the 24-pin connector, while older motherboards use 20-pin model.
-	**BIOS (Basic Input/Output System)** is software that is encoded on a read only memory chip that is built into your motherboard. This is responsible for starting the different connected components, checking that they are installed correctly, and booting into your operating system. 
-	**CMOS (Complementary Metal-Oxide Semiconductor)** CMOS is a special memory chip which BIOS settings are stored ie: Date, Time, Hard Drive Configuration, RAM and CPU settings.
    - The CMOS is a RAM chip, and forgets your settings if it loses power. To retain information, it's always powered by the **CMOS Battery**, a small watch battery found on the motherboard

:::note
If a computer requires you to enter the BIOS settings every time it turns on, or the clock defaults to midnight on January 1st, the **CMOS battery** is likely old and needs to be replaced.
:::

-	**Back-panel connectors** are connectors found on your motherboard that are accessable from the back of the computer case. 
-	Your computer likely has a power and restart button, USB ports, and a headphone jack on the front of the case. These connect to a connector on the motherboard known as the **front-panel connectors** 

## Processors

-	The **Central Processing Unit (CPU)** is the brain of the computer. It's main job is to control and direct all the processes and activities of the computer. The CPU is the computer component known to generate the most heat. The two most popular CPU manufacturers are **Intel** and **Advanced Micro Devices (AMD)**.

### CPU Architecture
- The CPU has a preprogramed group of tasks it can run, known as it's "**instruction set**".
    - Desktop and laptop computers almost always use the **x86 instruction set**, while mobile devices like smartphones and tablets use a simpler instruction set known as **ARM (Advanced RISC Machine)** 
    - The CPU also has a **bit width** that can refers to how much information an instruction can contain. **32-bit** and **64-bit** are the most common bit widths. Older computers and gaming systems used smaller ones, you might see the term **8-bit** used to describe retro video games (or the processors they ran on!).  
    - A CPU's **instruction set** and **bit width** is combined together to be called the **CPU Architecture** 

<Tabs
  defaultValue="x86-32"
  values={[
    {label: 'x86 (32-bit)', value: 'x86-32'},
    {label: 'x86 (64-bit)', value: 'x86-64'},
    {label: 'ARM', value: 'arm'},
  ]}>
  <TabItem value="x86-32"> The 32-bit processor found in desktop and laptop computers. These are only capable of running 32-bit operating systems and applications. They are generally slower, and usually do not support more than 4GB of memory. There are no mainstream 32-bit x86  processors in production today, and they are typically considered "legacy".</TabItem>
  <TabItem value="x86-64"> The 64-bit processor found in desktop and laptop computers. A 64-bit processor is required to run 64-bit operating systems and software, and is backwards compatible with older 32-bit software. Most processors today are 64-bit. </TabItem>
  <TabItem value="arm"> The processor found in smartphones and tablets. These comes in 32-bit and 64-bit versions. Because they understand a smaller set of instructions, they consume less power and generate less heat, making them ideal for battery powered, fanless devices. Some laptop and desktop computers, like those with Apple's new M1 processor, are starting to also use the ARM architecture. </TabItem>
</Tabs>

### CPU Speed
**CPU speed** is measured in electrical cycles per second called Hertz (Hz). Modern CPU process electrical cycles in billions of Cycles per second (Gigahertz). That is why when you look up CPU speeds they are always written in GHz.

### CPU Cache
CPUs have built in memory called cache, which typically come with 3 Levels in one chip. L1, L2 and L3.
-	L1 is most commonly known as the fastest, but the smallest capacity.
-	L2 is slower in speed that L1 but larger in capacity.
-	L3 is the slowest in speed but, much larger in capacity than L1 and L2 combined.

## Memory

### Types of Memory 
Memory is a computer hardware device that is used to store data.
Data can be stored on memory in one of two ways: statically or dynamically.
-	**Static Memory** means the data stored does not need power to keep the data saved within it, known as *non-volatile memory*.
-	**Dynamic Memory** meaning the data stored requires a constant flow of power (electricity) to keep the data, known as *volatile memory*.

Memory is designed to be accessed in one of 2 ways: **Read Only Memory (ROM)** and **Random Accessed Memory (RAM)**.
-	**ROM** is data stored permanently on the hardware or chip, in which you cannot make changes to its content at all.
-	**RAM** is which can be written and rewritten on the hardware or chip. There are two common forms of *RAM, Static RAM* *(SRAM)* and *Dynamic RAM (DRAM)*.
    -	**Static RAM** is does not need power to keep its data. This is the type of memory chip that is used to save data to SSDs and Flash Drives. 
    -	**Dynamic RAM** does require power to keep its data. This is the type of memory chip used on a stick of computer RAM. 

### Memory Bus 
The **memory bus** is the pathway on the motherboard which data is delivered between the memory and the CPU. The speed memory operates on modern PC is synchronized with the system bus, which is controlled by a system timer (known as Northbridge) on the motherboard. The system timer controls how fast the data enters the processor (CPU).
-	Memory that is designed to operate at the same speed as the Memory Bus or Front side-bus is called **single data rate (SDR)** Synchronous Dynamic Random-Access Memory **(SDRAM)**.
-	Successor to SDR SDRAM is called Double Data Rate (**DDR**) **SDRAM** also called DDR1. There are other successors to DDR1 such as DDR2, DDR3, DDR4 etc. While they all work similarly, the major improvement between each version is the speed, doubling the speed data can be read or written by double of it's predecessor. 

### Memory Form Factors
- Desktops use a type of memory known as **Dual Inline Memory Module (DIMM)**. DIMM is arranged is such a way that the pins that connect to the RAM socket on the motherboard are placed on both sides of the RAM chip.
-	Laptops use **Small Outline Dual Inline Memory (SODIMM)** which is smaller compared to the DIMM model.

# Exploring Storage and Expansion Devices
Storage devices prolong the long-term storage, while Expansion Devices expand your systems’ functionality by giving it additional features.  

## Storage Drives
Hard drives and solid-state drives are used for permanent storage and quick access.
- The capacity of a storage device, or how much data it can hold, is usually measured in bytes. For example, a 1000GB hard drive can store a maximum of 1 trillion bytes.
-	Hard drives come in **3.5" (for desktops)** and **2.5" sizes (for laptops)**. Solid state drives usually only come in the 2.5" size. 

### Types of Storage Devices 
-	**Hard Disk Drives (HDDs)** rely on a spinning magnetic disk to read and write data. The speed this disk spins (and therefore, the speed we read/write data) is measured in **Revolutions Per Minute (RPM)**. HDDs are an inexpensive way to store large amounts of data.
-	**Solid-State Drives (SSDs)** are a faster alternative to HDDs that use flash memory chips to store data. Since they do not rely on moving parts, they are faster, consume less power, and are more resiliant than their HDD counterpart. However, they are more expensive than HDDs and have a finite (limited) amount of times data can be written to them.

|     | Pros | Cons | 
| --- | ---- | ---- |
| HDD | Low cost option for storing large amounts of data | Slow, loud, hot, sensitive to movement| 
| SSD | Very fast, silent, generate little heat | Expensive, especially for large amounts of data. Limited write operations. | 
### Storage Device Connectors
Connecting a Hard drive to the motherboard of either a Desktop or Laptop depends on the standard that the drive uses. There are 2 common hard drive standards that are used in the market today. **Parallel ATA (PATA)** also know as **Integrated Drive Electronics (IDE)** and **Serial ATA (SATA)**.  
-	**PATA/IDE** is a legacy technology that uses a large "ribbon style" connector. It is very slow by modern standards. 
-	**SATA** is the modern standard for connecting storage devices. It uses a small, L shaped "SATA connector", and supports speeds of up to 6 Gbps.

## Optical Drives
An optical drive is a computer hardware that, uses laser light as part of the process of reading or writing data to or from optical disks. Popular examples of optical disks include **Compact Disks (CD)**, **Digital Video Disk (DVD)**, and **Blu-Ray Disk (BD)**.
-	Optical discs have special features that both the disk and drive must support. Examples include: 
    - **-R** (Writable): Allowing users to record their own data to the disc a single time. Goes through a "finishing" process after "burning" the disc that converts it to a -ROM (read-only).
    - **(CD/DVD)-RW (BD)-RE** (Re-writable/Re-recordable): Allow users to record and edit information written to a disc multiple times. 
    - **-DL** (Dual Layer): The disc has multiple payers of storage space, doubling the storage capacity of the disc.  
    - **-DS** (Double Sided): The disc contains data on both sides of the disk. 
    - These can be combined together to have the benefits of each other. For example, a BD-DLDSRE is a dual layer, double sided, re-recordable Blu-Ray disc capable of holding approximately 100 GB of data. 

## Video Cards
A video card (also known as graphics adapter) is an expansion card that contains a special processor (known as the **GPU**) that helps quickly process high quality graphics in video games, photo/video editing, and more. It also provides additional monitor outputs for users that require multiple displays.

## Sound Cards
Sounds cards convert digital information into sound waves. They typically come with 3.5 mm jacks which allows sound devices, like headphones, speakers, and microphones, to be used with the computer. Sound cards are often built into the motherboard today.
-	Old models of sound cards used to also come with a DA15 "game port", to allow gamepads and joysticks to be connected to the machine. This is a legacy connector, as modern controllers usually use USB or Bluetooth. 

## Network Cards
Network Cards allow computers to communicate and share data with other computers, via either a wired (Ethernet) or wireless (wi-Fi) connection. 

## Modems
Modems (Modulator/ Demodulator) is a device that converts digital signals to analog signals that can be transmitted over phone lines and back again. These devices were used to access the internet through a dial-up connection (very slow!) and are legacy today. Some modems also allow features like faxing.

# Exploring Power and Cooling
Computers require power to function, however they also generate a lot of heat in the process, which results in the need for a cooling.

## Power Supplies
The device that power a computer is called a Power Supply Unit (PSU). PSU convert AC current to DC current to power the components of the motherboard. PSU unit of power is rated in watts. The higher the rating the more the PSU produces the power.

## Cooling Systems
Providing power to computer components generates a lot of heat, which in turn shortens the life of the computer. To prevent premature decay of computer components two cooling systems are put in place: Case (Chassis) and /or CPU cooling.
-	**Case (Chassis) cooling** most commonly uses fans to cool components of a computer. A number of specific fans are used to cool the case. 
    - Front Intake Fan - Takes in fresh cool air into the chassis.
    -	Rear Exhaust Fan - Takes out all the hot air generated in the chassis.
    -	Power Supply Exhaust Fan – Takes out heat generated by the PSU.  

-	**CPU cooling** since the CPU generates the most heat of any component, it requires it's own special cooling solution.  	
    -	Air cooling is most common, and involves transfering heat away from the CPU using a device called the **heatsink**, which distributes the heat across thin metal blades or fins. A fan is usually attached to the heatsink to keep it cool. 
    -	Liquid cooling uses a device known as a water block to transfer heat away from the CPU into a liquid (usually water) and transfer it to a radiator, where it is cooled. Although liquid cooling is quieter than air cooling, it is more expensive and are perceived to cause more damage to a computer if the device breaks within the chassis.

# Summary
In this chapter we looked at many things:
-	First, we looked at motherboards, CPU and Memory. The motherboard is considered the computers central nervous system that connects all the component of a computer, while The CPU server’s as the brains of the computer and the memory stores data and instructions.
-	Second, we looked at various storage devices and expansion devices. We learned that Hard drives allow long term storage of data and expansion devices add more functionality to a computer device i.e. video cards, sound cards, network cards, etc.
-	Finally, Power supply which keep computer components powered and System cooling which provide the cooling of the components within the computer chassis (case). In addition, we also learned that there are two methods used to keep the CPU cool; air and liquid which uses water.
