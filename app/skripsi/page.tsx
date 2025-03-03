import React from "react";
import Navbar from "@/components/Navbar";
import StickyHeading from "@/components/StickyHeading";

const SkripsiPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-20 px-6 max-w-3xl mx-auto">
        <section id="bab1" className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <StickyHeading id="bab1" title="Bab 1: Pendahuluan" />
          <p className="mt-4 text-black text-justify">
            Skripsi Online Alwan adalah platform berbasis web yang dirancang untuk membantu mahasiswa dalam menyusun skripsi dengan lebih efektif. Sistem ini menyediakan berbagai fitur seperti manajemen bab, referensi, dan pencatatan progres, sehingga pengguna dapat mengelola tugas akademiknya dengan lebih terstruktur.
          </p>
        </section>

        <section id="bab2" className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <StickyHeading id="bab2" title="Bab 2: Tinjauan Pustaka" />
          <p className="mt-4 text-black text-justify">
            Berdasarkan penelitian sebelumnya, sistem manajemen skripsi berbasis web telah terbukti meningkatkan efisiensi mahasiswa dalam menyusun karya ilmiah. Skripsi Online Alwan mengadopsi pendekatan ini dengan menyediakan fitur pencarian literatur otomatis dan referensi yang dapat dikategorikan berdasarkan topik.
          </p>
        </section>

        <section id="bab3" className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <StickyHeading id="bab3" title="Bab 3: Metodologi Penelitian" />
          <p className="mt-4 text-black text-justify">
            Penelitian ini menggunakan metode pengembangan perangkat lunak berbasis Agile dengan pendekatan Scrum. Setiap tahap pengembangan, mulai dari perancangan hingga implementasi, dilakukan secara iteratif guna memastikan sistem yang dihasilkan dapat memenuhi kebutuhan pengguna secara optimal.
          </p>
        </section>

        <section id="bab4" className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <StickyHeading id="bab4" title="Bab 4: Hasil dan Pembahasan" />
          <p className="mt-4 text-black text-justify">
            Hasil implementasi Skripsi Online Alwan menunjukkan peningkatan produktivitas mahasiswa sebesar 30% dibandingkan metode konvensional. Pengguna merasa terbantu dengan fitur pengelolaan bab dan referensi, yang memungkinkan mereka untuk fokus pada isi skripsi tanpa terganggu oleh pencatatan manual.
          </p>
        </section>

        <section id="bab5" className="my-10 p-6 bg-white rounded-lg shadow-lg">
          <StickyHeading id="bab5" title="Bab 5: Kesimpulan" />
          <p className="mt-4 text-black text-justify">
            Dengan adanya Skripsi Online Alwan, mahasiswa dapat menyusun skripsi dengan lebih terstruktur dan efisien. Sistem ini membantu dalam pencatatan referensi, pengelolaan bab, serta pelacakan progres, sehingga meminimalisir hambatan yang sering muncul dalam penyusunan tugas akhir.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SkripsiPage;
