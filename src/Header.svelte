<!-- <h3 class="text-2xl mt-4 text-gray-800 border-solid border-b-2 border-teal-600">Skills</h3> -->

<h3 class="text-2xl text-gray-800 grid grid-cols-2 gap-4">
    <span><slot></slot></span>
    <div class="my-auto border-solid border-b-2 border-teal-600"></div>
</h3>

<style>
    h3 {
        grid-template-columns: auto 1fr;
    }
</style>