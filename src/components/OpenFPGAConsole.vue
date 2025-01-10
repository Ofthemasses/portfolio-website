<template>
<div class="bg-gradient-to-tr from-red-900 to-red-700 text-gray-100 font-light">
  <div class="relative flex justify-center items-center">
    <h1 class="max-md:text-3xl text-5xl py-10">Open FPGA Console Wiki</h1>
  </div>
  <div class="relative md:grid grid-cols-2 min-[1000px]:grid-cols-4 md:gap-10 md:px-8 pt-8 pb-32 bg-gradient-to-t from-gray-900 to-transparent">
      <div class="bg-gray-700 max-w-md rounded overflow-hidden shadow-lg shadow-gray-800 p-4 h-64">
        <h2 class="text-lg font-extrabold">Open FPGA Console Documentation</h2>
        <p class="pt-2 pr-8">Documentation generation to be implemented.</p>
      </div>
    <a href="/#/markdown/fpga-game-console/root">
      <div class="bg-gray-900 max-w-md rounded overflow-hidden shadow-lg shadow-gray-800 p-4 h-64">
        <h2 class="text-lg font-extrabold">Meeting Notes</h2>
        <p class="pt-2 pr-8">Weekly Markdown Meeting Notes</p>
      </div>
    </a>
      <div class="bg-gray-700 max-w-md rounded overflow-hidden shadow-lg shadowgray-800 p-4 h-64">
        <h2 class="text-lg font-extrabold">Repository</h2>
        <p class="pt-2 pr-8">The OpenFPGAConsole repository will be linked once background research is complete.</p>
      </div>
    <a href="/#/uni/masters">
      <div class="bg-gray-900 max-w-md rounded overflow-hidden shadow-lg shadow-gray-800 p-4 h-64">
        <h2 class="text-lg font-extrabold">Resources</h2>
        <p class="pt-2 pr-8">Academic Resources for the OpenFPGAConsole Project</p>
      </div>
    </a>
  </div>
</div>
<div class="relative flex justify-center items-center text-gray-100 font-light">
  <h2 class="max-md:text-2xl text-4xl py-10">The Project</h2>
</div>
      <ul class="relative text-gray-100 px-16 py-10 text-left font-light">
        <li class="pt-6">
          The open-source community in FPGA design is small but beginning to
  flourish. Since the creation of the RISC-V open standard, the opportunity to
  adopt designs that are not dependent on patented and commercial designs is
  now possible when designing on FPGAs. This project, as a part of my master's
  thesis, aims to create an FPGA game console using purely open-source IP
  blocks and HDL code. By doing this, we can explore open-source FPGA design
  and complete a piece of work that can act as a meaningful contribution to
  the open-source community.
        </li>
        <li class="pt-6">
          The core goals of the project are:
        </li>
        <li class="pt-6 ml-6 list-disc">
          <b class="font-bold">To Create an FPGA Game Console</b>: The
  realisation of an FPGA game console with display output, controller
  interfaces, and an interface to load programs.
        </li>
        <li class="pt-6 ml-6 list-disc">
          <b class="font-bold">Make Use of Existing Open-Source IPs and Graphics
  APIs</b>: The aim of the project is not to reinvent the wheel. By making use
  of existing open-source RISC-V cores, interface blocks, and integration of
  open-standard graphic APIs, we aim to enhance these projects that are
  auxiliary to ours and others.
        </li>
        <li class="pt-6 ml-6 list-disc">
          <b class="font-bold">Create a Game Tech Demo to Analyse RISC-V</b>: By
  creating a game tech demo, we will be able to not only test the FPGA we
  produce and the open-source cores and IPs we have integrated, but also to
  analyse using RISC-V's instruction set, its vector extension, and other
  instructions we wish to implement. Implementing custom instructions is an
  integral feature of RISC-V.
        </li>
        <li class="pt-6 ml-6 list-disc">
              <b class="font-bold">Stay Accountable to the Philosophical Goals
  of the Project</b>: By creating a clear project philosophy, we can ensure
  the project does not diverge from its objectives. Below, and soon to be in a
  PDF, is the Project Philosophy. An integral part of this philosophy is a
  means of tracking and linking work to the philosophy. We define what work is
  permitted, and issues can be back-linked to these permitted categories of
  work to ensure the project remains guided.</li>
      </ul>
<div class="relative flex justify-center items-center text-gray-100 font-light">
  <h2 class="max-md:text-2xl text-4xl py-10">Project Philosophy (Under Development)</h2>
</div>
<div class="relative text-gray-100 px-16 py-10 text-left font-light">
		  <h3 class="text-lg font-bold">1. Definitions</h3> <ul
class="list-disc pl-8"> <li class="pt-2"> <strong>Community:</strong> The
contributors, (hardware) open-source community and users of the project </li>
</ul>

		  <h3 class="text-lg font-bold pt-6">2.
Objectives</h3> <ul class="list-disc pl-8"> <li class="pt-2">Develop a project
that meaningfully investigates and enriches the community.</li> <li
class="pt-2">Prioritize utilizing open source for the free distribution of
information and technology, rather than for profit-making or contributing to
industry profits.</li> <li class="pt-2">Position the project as a product for
the community, ensuring it is democratically controlled by its members.</li>
<li class="pt-2">Allow any restrictions on community contributions and
decision-making to be implemented only through democratic processes, such as
defining criteria for verifying a community member's vote.</li> <li
class="pt-2">Ensure that the manufacturing processes for project designs adhere
to ethical standards.</li> </ul>

		   <h3 class="text-lg
font-bold pt-6">3. Issues and Contributions</h3> <p class="pt-2">All GitHub and
CodeBerg issues should connect back to or reference these core topics. This
must be completed by providing a link to a valid version of this document, and
referencing a topic by number(s).</p>

		  <h4 class="text-md font-semibold pt-4">3.1 Importance of Open Source
in FPGA Design</h4> <ul class="list-disc pl-8"> <li class="pt-1">3.1.1
Investigates why open-source is critical.</li> <li class="pt-1">3.1.2
Investigates why open-source is critical in FPGA design.</li> </ul>

		  <h4 class="text-md font-semibold pt-4">3.2 Investing in the Culture
of Open Source Projects</h4> <ul class="list-disc pl-8"> <li class="pt-1">3.2.1
Improves upon existing, or implements new features to open-source
development.</li> <li class="pt-1">3.2.2 Improves upon existing, or implements
new features to open-source development in FPGA design.</li> </ul>

		  <h4 class="text-md font-semibold pt-4">3.3 Producing a Product</h4>
<ul class="list-disc pl-8"> <li class="pt-1">3.3.1 Contributes to the
realisation of a FPGA game console, without conflicting with 2, 3.1 and
3.2.</li> </ul>
</div>
<span class="p-12"/>
</template>

<script>
export default {
  name: "OpenFPGAConsole"
}
</script>
