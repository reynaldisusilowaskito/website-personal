document.addEventListener("DOMContentLoaded", function() {
    console.log("Website siap!");

    // Tambahkan efek smooth scrolling saat klik menu navbar
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Sesuaikan dengan tinggi navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
