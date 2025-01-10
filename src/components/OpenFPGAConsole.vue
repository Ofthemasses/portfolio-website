<template>
<div class="bg-gradient-to-tr from-red-900 to-red-700 text-gray-100 font-light">
  <div class="relative flex justify-center items-center">
    <h1 class="max-md:text-xl text-5xl py-10">Open FPGA Console Wiki</h1>
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
      <ul class="relative text-gray-100 px-4 md:px-16 py-10 text-left font-light">
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
  <h2 class="max-md:text-2xl text-4xl py-10">Acknowledgements</h2>
</div>
      <ul class="relative text-gray-100 px-4 md:px-16 py-10 text-left font-light">
          <li>
          This section is to acknowledge those who are supporting me in completing this masters. I am incredibly privileged to have the
          support of two university professors on this project, only one is listed as the other is currently on leave but will hopefully
          be accredited in future.           </li>
      <li class="text-lg font-bold pt-16">Supervisors | <a href="https://www.wgtn.ac.nz/" class="hover:text-purple-300 text-purple-400">Te Herenga Waka, Victoria University of Wellington</a></li>
      <li class="relative md:grid grid-cols-1 min-[1000px]:grid-cols-2 md:gap-10 md:px-8 pt-8 pb-32 bg-gradient-to-t from-gray-900 to-transparent">
      <div class="bg-gray-700 rounded overflow-hidden shadow-lg shadow-gray-800 p-4 mb-4 md:m-0 md:h-64 flex flex-col md:flex-row items-center md:items-start">
          <img src="https://www.wgtn.ac.nz/images/staffpics/hamish-colenso.jpg"
          class="w-56 h-56 pr-4 "/>
          <div>
          <h2 class="text-lg font-extrabold">Dr. Hamish Colenso</h2>
          <p class="pr-8 italic">School of Engineering and Computer Science</p>
          <div class="pt-2 pr-8 flex">
<svg class="hidden md:block fill-white mr-2" width="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
            <p>Lecturer in Electrical and Electronic Engineering (Teaching)</p>
          </div>
          <a href="mailto:hamish.colenso@ecs.vuw.ac.nz" class="pt-2 pr-8 flex hover:text-purple-300 text-purple-400">
<svg class="hidden md:block fill-white mr-2" xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 512 512">
		  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            <p class="break-all">hamish.colenso@ecs.vuw.ac.nz</p>
          </a>
          <a href="https://people.wgtn.ac.nz/hamish.colenso/publications" class="pt-2 pr-8 flex hover:text-purple-300 text-purple-400">
<svg class="hidden md:block fill-white mr-2" width="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <p>Publications</p>
          </a>
          </div>
     </div>
      <div class="bg-gray-700 rounded overflow-hidden shadow-lg shadow-gray-800 p-4 h-64 flex flex-col md:flex-row items-center md:items-start">
          <div class="w-56 h-56 mr-4 bg-gray-900"/>
          <div><h2 class="text-lg font-extrabold">Supervisor 2</h2></div>
	  </div>
      </li>
      <li>I also have been awarded the <a href="https://www.wgtn.ac.nz/scholarships/current/wellington-masters-by-thesis-scholarship" class="hover:text-purple-300 text-purple-400">Wellington Master's by Thesis Scholarship</a> for my masters from <a href="https://www.wgtn.ac.nz/" class="hover:text-purple-300 text-purple-400">Te Herenga Waka, The Victoria University of Wellington</a>. This scholarship has payed for my tuition and is supporting my living expenses through a $15,000 stipend. This financial relief will allow me to spend more time on my studies and I am incredibly grateful. A part of this scholarship required a submission of a one-page research proposal, you can see the proposal in <a href="/#/uni/masters" class="hover:text-purple-300 text-purple-400">the project resources</a> titled 'proposal.pdf'</li>

      </ul>
<div class="relative flex justify-center items-center text-gray-100 font-light">
  <h2 class="text-center max-md:text-2xl text-4xl py-10">Project Philosophy (Under Development)</h2>
</div>
<div class="relative text-gray-100 px-4 md:px-16 py-10 text-left font-light">
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
