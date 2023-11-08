const tambah = document.querySelector(".tambah");
const input = document.querySelector("#input");

// tombol tambah
tambah.addEventListener("click", function(){
    // membuat div dengan class "isi"
    const buat = document.createElement("div");
    buat.classList.add("isi");

    // membuat input
    const isiList = document.createElement("input");
    isiList.setAttribute("type", "text");
    isiList.setAttribute("name", "teks");
    isiList.id = "teks";
    isiList.classList.add("w-1/5", "p-2", "rounded-md", "text-xl", "bg-slate-200", "italic", "font-semibold", "outline-none", "uppercase");
    isiList.value = input.value;
    isiList.readOnly = true;

    // membuat tombol edit
    const edit = document.createElement("i");
    edit.classList.add("fa-solid", "fa-pen", "bg-amber-500", "text-2xl", "text-white", "p-3", "rounded-md", "hover:opacity-60", "cursor-pointer", "duration-300");

    // membuat tombol hapus
    const eraser = document.createElement("i");
    eraser.classList.add("fa-solid", "fa-trash", "bg-red-500", "text-2xl", "text-white", "p-3", "rounded-md", "hover:opacity-60", "cursor-pointer", "duration-300");

    // membuat tombol simpan
    const simpan = document.createElement("i");
    simpan.classList.add("fa-regular", "fa-floppy-disk", "bg-sky-500", "text-2xl", "text-white", "rounded-md", "hover:opacity-60", "cursor-pointer", "duration-300", "before:hidden");

    // membuat tombol batal
    const batal = document.createElement("i");
    batal.classList.add("fa-solid", "fa-xmark", "bg-yellow-500", "text-2xl", "text-white", "rounded-md", "hover:opacity-60", "cursor-pointer", "duration-300", "before:hidden");

    // gabungkan semuanya
    buat.appendChild(isiList);
    buat.appendChild(edit);
    buat.appendChild(eraser);
    buat.appendChild(simpan);
    buat.appendChild(batal);

    // masukkan elemennya ke div ".list"
    const list = document.querySelector(".list");
    list.appendChild(buat);

    // hapus value input
    input.value = "";
});

// atur fungsi tombol
const list = document.querySelector(".list");
// tombol edit
list.addEventListener("click", function(e){
    // tombol edit
    if(e.target.classList.contains("fa-pen")){
        const teks = e.target.previousElementSibling;
        const hapus = e.target.nextElementSibling;
        const simpan = e.target.nextElementSibling.nextElementSibling;
        const batal = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
        // atur teks
        teks.readOnly = false;
        teks.style.backgroundColor = "white";
        teks.classList.remove("italic");
        //tombol edit hilang
        e.target.classList.add("before:hidden");
        e.target.classList.remove("p-3");
        //tombol hapus hilang
        hapus.classList.add("before:hidden");
        hapus.classList.remove("p-3");
        // tombol simpan muncul
        simpan.classList.remove("before:hidden");
        simpan.classList.add("p-3");
        // tombol batal muncul
        batal.classList.remove("before:hidden");
        batal.classList.add("p-3");
    }

    // tombol hapus
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove();
    }

    // tombol simpan
    if(e.target.classList.contains("fa-floppy-disk")){
        const teks = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
        const edit = e.target.previousElementSibling.previousElementSibling;
        const hapus = e.target.previousElementSibling;
        const batal = e.target.nextElementSibling;

        // atur teks
        teks.readOnly = true;
        teks.classList.add("italic");
        teks.style.backgroundColor = "rgb(226 232 240)";

        // tombol simpan hilang
        e.target.classList.add("before:hidden");
        e.target.classList.remove("p-3");
        // tombol batal hilang
        batal.classList.add("before:hidden");
        batal.classList.remove("p-3");
        // tombol edit muncul
        edit.classList.remove("before:hidden");
        edit.classList.add("p-3");
        // tombol hapus muncul
        hapus.classList.remove("before:hidden");
        hapus.classList.add("p-3");
    }

    // tombol batal
    if(e.target.classList.contains("fa-xmark")){
        const teks = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        const edit = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
        const hapus = e.target.previousElementSibling.previousElementSibling;
        const simpan = e.target.previousElementSibling;

        // teks kembali normal
        teks.readOnly = true;
        teks.style.backgroundColor = "rgb(226 232 240)";
        teks.classList.add("italic");
        // tombol simpan hilang
        simpan.classList.add("before:hidden");
        simpan.classList.remove("p-3");
        // tombol batal hilang
        e.target.classList.add("before:hidden");
        e.target.classList.remove("p-3");
        // tombol edit muncul
        edit.classList.remove("before:hidden");
        edit.classList.add("p-3");
        // tombol hapus muncul
        hapus.classList.remove("before:hidden");
        hapus.classList.add("p-3");
    }
})