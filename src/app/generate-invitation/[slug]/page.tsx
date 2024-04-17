"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
export default function Page({ params }: any) {
  const [url, setUrl] = useState("");
  const [recipient, setRecipient] = useState("");
  const [mode, setMode] = useState("");
  const [textCopy, setTextCopy] = useState("Salin");
  const [selectTemplateOption, setSelectTemplateOption] =
    useState<string>("default");
  const [template, setTemplate] = useState<string>("");
  const [customTemplate, setCustomTemplate] = useState<string>("");

  const templateInvitaion = `
Assalamu'alaikum Wr. Wb & Bismillahirahmanirrahim.
  
Kepada Yth.
${recipient}
  
Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara kami.
  
Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :
  
${url}
  
Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.
  
Jika berkenan mohon untuk mengisi ucapan serta datang pada jam yang telah ditentukan.
  
Terima kasih banyak atas perhatiannya.
Wassalamu'alaikum Wr. Wb.`;

  const generateInvitationURL = (slug: string, recipient: string) => {
    let url = "https://www.familydecorative.com/invite/";

    // Jika slug ada, tambahkan ke URL
    if (slug) {
      url += slug;
    }

    // Jika recipient ada, tambahkan ke URL sebagai query parameter
    if (recipient) {
      // Mengganti spasi dengan -
      let modifiedRecipient = recipient.replace(/ /g, "_");
      // Mengganti dan atau & dengan -
      modifiedRecipient = modifiedRecipient.replace(
        /(?:\b)(?:dan|&)(?:\b)/g,
        "-"
      );

      if (modifiedRecipient.includes("_-_")) {
        modifiedRecipient = modifiedRecipient.replace(/_-_/g, "-");
      }

      url += `?to=${modifiedRecipient}`;
    }

    return url;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setTextCopy("Tersalin");
    setTimeout(() => {
      setTextCopy("Salin");
    }, 2000);
  };

  const handleWhatsApp = () => {
    // URL WhatsApp Web
    const url = "https://web.whatsapp.com/";

    // Buka WhatsApp Web dalam jendela baru
    window.open(url, "_blank");
  };

  const handleResetRecipient = () => {
    setRecipient("");
    setMode("");
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectTemplateOption(event.target.value);
    setMode("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setCustomTemplate(value);
  };

  useEffect(() => {
    const invitationURL = generateInvitationURL(params.slug, recipient);
    setUrl(invitationURL);

    if (!recipient) {
      setMode("");
    }
  }, [params.slug, recipient]);

  return (
    <div className="w-full mx-auto">
      <main className="max-w-7xl mx-6 md:mx-auto my-10">
        <h1 className="md:text-3xl text-2xl text-black font-semibold text-center">
          Generate Undangan
        </h1>
        <div className="py-4 px-4 md:px-8 border m-4 rounded-xl w-full md:w-[600px]">
          {/* url undangan */}
          <div className="mt-2">
            <div className="label">
              <span className="label-text text-gray-800">Link Undangan</span>
            </div>
            <input
              type="text"
              placeholder="Masukkan Link Undangan"
              className="input input-bordered w-full bg-white text-sm md:text-md"
              value={url}
              readOnly
            />
          </div>

          {/* select template */}
          <div>
            <div className="label">
              <span className="label-text text-gray-800">Pilih Template</span>
            </div>
            <select
              className="select select-bordered w-full bg-white"
              value={selectTemplateOption}
              onChange={handleSelectChange}
            >
              <option value="default">Default Template</option>
              <option value="custom">Custom Template</option>
            </select>
          </div>

          {/* input recipient */}
          <div className="mt-2">
            <div className="label">
              <span className="label-text text-gray-800">Nama Penerima</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Masukkan Nama Penerima"
                className="input input-bordered w-full bg-white text-sm md:text-md"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              {recipient && (
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={handleResetRecipient}
                >
                  <FaTimes className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                </button>
              )}
            </div>
          </div>

          {selectTemplateOption === "custom" && (
            <div className="mt-2">
              <div>
                <div className="label">
                  <span className="label-text text-gray-800">
                    Template Undangan
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-40 w-full bg-white"
                  placeholder={"ex: Assalamu'alaikum\n[LINK]\nTerimakasih"}
                  value={customTemplate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-xs text-gray-800">
                Note: Tambahkan tulisan <strong>{`[LINK]`}</strong> pada
                template undangan untuk menempatkan link undangan
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              className="btn btn-secondary text-white w-full"
              onClick={() => {
                setMode("create");
                if (selectTemplateOption === "custom") {
                  const invitationURL = generateInvitationURL(
                    params.slug,
                    recipient
                  );
                  setUrl(invitationURL);
                  const updatedInvitationText = customTemplate.replace(
                    /\[link\]/i,
                    invitationURL
                  );

                  setTemplate(updatedInvitationText);
                } else {
                  setTemplate(templateInvitaion);
                }
              }}
            >
              Lihat Preview
            </button>
          </div>
        </div>

        {mode === "create" && (
          <div className="mt-4 w-full md:w-[600px] rounded-md border">
            <div className="flex  justify-end m-4 gap-2">
              <button
                className="btn btn-sm btn-success text-white "
                onClick={handleWhatsApp}
              >
                Kirim WA
              </button>
              <button
                className="btn btn-sm btn-info text-white "
                onClick={handleCopy}
              >
                {textCopy}
              </button>
            </div>
            <pre className="w-full overflow-auto px-4">{template}</pre>
          </div>
        )}
      </main>
    </div>
  );
}
