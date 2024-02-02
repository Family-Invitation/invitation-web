import React from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Apa itu Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "Dari mana asalnya?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "Mengapa kita menggunakannya?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 bg-white rounded-lg flex flex-col justify-center items-center w-full">
      <h2 className="w-full text-center text-5xl font-philosopher font-semibold text-pink-500">
        FAQ
      </h2>
      <div className=" mt-8 w-full">
        {/* <Accordion items={faqs} /> */}
        <div className="join join-vertical w-full">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="collapse collapse-arrow join-item border border-gray-500"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-gray-800">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
