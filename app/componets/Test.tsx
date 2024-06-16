"use client";
import { useState } from "react";

interface Selections {
  [key: string]: string; // Each key is a string, and each value is a string
}

interface ConditionCounts {
  Vatha: number;
  Pitha: number;
  Kapha: number;
}

const initialConditionCounts: ConditionCounts = {
  Vatha: 0,
  Pitha: 0,
  Kapha: 0,
};

const conditionLogic: Record<string, Record<string, Record<string, number>>> = {
  "Body Size": {
    Slim: { Vatha: 1 },
    Medium: { Pitha: 1 },
    Large: { Kapha: 1 },
  },
  "Body Weight": {
    Low: { Vatha: 1 },
    Medium: { Pitha: 1 },
    Overweight: { Kapha: 1 },
  },
  Height: {
    "Tall Or Short": { Vatha: 1 },
    Average: { Pitha: 1 },
    "Thin And Sturdy Or Short And Stocky": { Kapha: 1 },
  },
  "Bone Structure": {
    "Light, Small Bones, Prominent Joints": { Vatha: 1 },
    "Medium Bone Structure": { Pitha: 1 },
    "Large, Broad Shoulders, Heavy Bone Structure": { Kapha: 1 },
  },
  Complexion: {
    "Dark Complexion, Tans Easily": { Vatha: 1 },
    "Fair Skin, Sun Burn Easily": { Pitha: 1 },
    "White Pale Tans Evenly": { Kapha: 1 },
  },
  "General Feel Of Skin": {
    "Dry, Cool": { Vatha: 1 },
    "Smooth Oily T-Zone": { Pitha: 1 },
    "Oily Cold": { Kapha: 1 },
  },
  "Texture Of Skin": {
    "Dry Pigmentation And Aging": { Vatha: 1 },
    "Freckles, Many Moles, Redness, Rashes And Acne": { Pitha: 1 },
    "Soft Glowing And Youthful": { Kapha: 1 },
  },
  "Hair Color": {
    "Dull, Black, Brown": { Vatha: 1 },
    "Red, Light Brown, Yellow": { Pitha: 1 },
    Brown: { Kapha: 1 },
  },
  "Appearance Of Hair": {
    "Dry, Black Knotted, Brittle": { Vatha: 1 },
    "Straight, Oily": { Pitha: 1 },
    "Thick, Curly": { Kapha: 1 },
  },
  "Shape Of Face": {
    "Long, Angular, Thin": { Vatha: 1 },
    "Heart Shape, Pointed Chin": { Pitha: 1 },
    "Large, Round, Full": { Kapha: 1 },
  },
  Eyes: {
    "Small, Active, Darting, Dark Eyes": { Vatha: 1 },
    "Medium Sized, Penetrating, Light Sensitive Eyes": { Pitha: 1 },
    "Big, Round, Beautiful Glowing Eyes": { Kapha: 1 },
  },
  Eyelashes: {
    "Scanty Eye Lashes": { Vatha: 1 },
    "Moderate Eye Lashes": { Pitha: 1 },
    "Thick, Fused Eye Lashes": { Kapha: 1 },
  },
  "Blinking Of Eyes": {
    "Excessive Blinking": { Vatha: 1 },
    "Moderate Blinking": { Pitha: 1 },
    "More Or Less Stable": { Kapha: 1 },
  },
  Cheeks: {
    "Wrinkled, Sunken": { Vatha: 1 },
    "Smooth, Flat": { Pitha: 1 },
    "Rounded, Plump": { Kapha: 1 },
  },
  Nose: {
    "Crooked, Narrow, Small": { Vatha: 1 },
    "Pointed, Average": { Pitha: 1 },
    "Rounded, Large Open Nostrils": { Kapha: 1 },
  },
  "Teeth And Gums": {
    "Irregular, Protruding Teeth, Receding Gums": { Vatha: 1 },
    "Medium Sized Teeth, Reddish Gums": { Pitha: 1 },
    "Big, White, Strong Teeth, Hearty Gums": { Kapha: 1 },
  },
  Lips: {
    "Tight, Thin, Dry Lips Which Chaps Easily": { Vatha: 1 },
    "Lips Are Soft, Medium Sized": { Pitha: 1 },
    "Lips Are Large, Soft Pink And Full": { Kapha: 1 },
  },
  Nails: {
    "Dry, Plough, Brittle, Break Easily": { Vatha: 1 },
    "Sharp, Flexible, Pink, Lustrous": { Pitha: 1 },
    "Thick, Oily, Smooth Polished": { Kapha: 1 },
  },
  Appetite: {
    "Irregular, Scanty": { Vatha: 1 },
    "Strong, Unbearable": { Pitha: 1 },
    "Slow But Steady": { Kapha: 1 },
  },
  "Liking Tastes": {
    "Sweet, Sour, Salty": { Vatha: 1 },
    "Sweet, Bitter, Astringent": { Pitha: 1 },
    "Pungent, Bitter, Astringent": { Kapha: 1 },
  },
  Thirst: {
    "High And Non-Persistent": { Vatha: 1 },
    "High And Persistent": { Pitha: 1 },
    Scanty: { Kapha: 1 },
  },
  Digestion: {
    "Irregular, Forms Gas": { Vatha: 1 },
    "Quick, Causes Burning": { Pitha: 1 },
    "Prolonged Forms Mucous": { Kapha: 1 },
  },
  Elimination: {
    Constipation: { Vatha: 1 },
    "Loose-Thick": { Pitha: 1 },
    "Oily, Sluggish": { Kapha: 1 },
  },
  Sleep: {
    "Scanty, Broken Up, Sleeplessness": { Vatha: 1 },
    "Sound, Needs Regular Hours": { Pitha: 1 },
    "Deep, Heavy, Prolonged": { Kapha: 1 },
  },
  Speech: {
    "Speaks Fast And Unclear": { Vatha: 1 },
    "Precise, Clear To The Point, Sharp": { Pitha: 1 },
    "Slow, Gentle, Long Chats, Monotonous": { Kapha: 1 },
  },
  "Physical Activity": {
    Hyperactive: { Vatha: 1 },
    Moderate: { Pitha: 1 },
    Slow: { Kapha: 1 },
  },
  "Mental Activity": {
    Hyperactive: { Vatha: 1 },
    Moderate: { Pitha: 1 },
    "Slow, Dull": { Kapha: 1 },
  },
  Emotions: {
    "Anxiety, Fear, Uncertainty": { Vatha: 1 },
    "Anger, Ambitious, Practical": { Pitha: 1 },
    "Calm, Peaceful, Solicitous": { Kapha: 1 },
  },
  Memory: {
    "Quick To Remember And Forget": { Vatha: 1 },
    "Average, Clear, Distinct": { Pitha: 1 },
    "Slow To Remember And Forget": { Kapha: 1 },
  },
  Faith: {
    Variable: { Vatha: 1 },
    Extremist: { Pitha: 1 },
    Consistent: { Kapha: 1 },
  },
  Anger: {
    "Quick And Unstable": { Vatha: 1 },
    "Quick And Sustained": { Pitha: 1 },
    "Always Cool": { Kapha: 1 },
  },
  "Sexual Drive": {
    "Fantasizes Romantic, Quick To Release": { Vatha: 1 },
    "Strong Burning Desire, Active And Intense": { Pitha: 1 },
    "Slow, Long Enduring, Passionate And Tender": { Kapha: 1 },
  },
  "Temperature And Weather": {
    "Dislike Cold, Windy, Dry Weather, Likes Warmth": { Vatha: 1 },
    "Dislike Hot Weather, Prefer Cool, Well-Ventilated Places": { Pitha: 1 },
    "Dislike Cool And Damp Weather, Can Tolerate Different Climates": {
      Kapha: 1,
    },
  },
  "Lifestyle Orientation": {
    "Fashion Oriented": { Vatha: 1 },
    "Business Oriented": { Pitha: 1 },
    "Family Oriented": { Kapha: 1 },
  },
  "Way Of Thinking": {
    "Creative, Many Projects At A Time": { Vatha: 1 },
    "Organized, One Project At A Time": { Pitha: 1 },
    "Follows A Plan Or Idea, Dislikes Change": { Kapha: 1 },
  },
  "Response To Problems": {
    "Worried, Confused, Often Gives Wrong Solution": { Vatha: 1 },
    "Agitated, Gives Right And Firm Solution": { Pitha: 1 },
    "Calm And Slow, But Gives Right Solution": { Kapha: 1 },
  },
  "Job Preferences": {
    "Creative, Aggressive": { Vatha: 1 },
    "Travelling Routine": { Pitha: 1 },
    "Challenging, Sedentary": { Kapha: 1 },
  },
  "Fashion Preferences": {
    "Trendy And Versatile": { Vatha: 1 },
    "Executive Wear Or Sporty": { Pitha: 1 },
    "Casual, Comfortable, Loose Clothing": { Kapha: 1 },
  },
  "Aroma Choice": {
    "Vanilla, Rose, Chamomile, Cinnamon": { Vatha: 1 },
    "Sandalwood, Jasmine, Licorice": { Pitha: 1 },
    "Lavender, Lemon, Eucalyptus": { Kapha: 1 },
  },
  Concentration: {
    Good: { Vatha: 1 },
    Moderate: { Pitha: 1 },
    Poor: { Kapha: 1 },
  },
};

const options: Record<string, string[]> = {
  "Body Size": ["Slim", "Medium", "Large"],
  "Body Weight": ["Low", "Medium", "Overweight"],
  Height: ["Tall Or Short", "Average", "Thin And Sturdy Or Short And Stocky"],
  "Bone Structure": [
    "Light, Small Bones, Prominent Joints",
    "Medium Bone Structure",
    "Large, Broad Shoulders, Heavy Bone Structure",
  ],
  Complexion: [
    "Dark Complexion, Tans Easily",
    "Fair Skin, Sun Burn Easily",
    "White Pale Tans Evenly",
  ],
  "General Feel Of Skin": ["Dry, Cool", "Smooth Oily T-Zone", "Oily Cold"],
  "Texture Of Skin": [
    "Dry Pigmentation And Aging",
    "Freckles, Many Moles, Redness, Rashes And Acne",
    "Soft Glowing And Youthful",
  ],
  "Hair Color": ["Dull, Black, Brown", "Red, Light Brown, Yellow", "Brown"],
  "Appearance Of Hair": [
    "Dry, Black Knotted, Brittle",
    "Straight, Oily",
    "Thick, Curly",
  ],
  "Shape Of Face": [
    "Long, Angular, Thin",
    "Heart Shape, Pointed Chin",
    "Large, Round, Full",
  ],
  Eyes: [
    "Small, Active, Darting, Dark Eyes",
    "Medium Sized, Penetrating, Light Sensitive Eyes",
    "Big, Round, Beautiful Glowing Eyes",
  ],
  Eyelashes: [
    "Scanty Eye Lashes",
    "Moderate Eye Lashes",
    "Thick, Fused Eye Lashes",
  ],
  "Blinking Of Eyes": [
    "Excessive Blinking",
    "Moderate Blinking",
    "More Or Less Stable",
  ],
  Cheeks: ["Wrinkled, Sunken", "Smooth, Flat", "Rounded, Plump"],
  Nose: [
    "Crooked, Narrow, Small",
    "Pointed, Average",
    "Rounded, Large Open Nostrils",
  ],
  "Teeth And Gums": [
    "Irregular, Protruding Teeth, Receding Gums",
    "Medium Sized Teeth, Reddish Gums",
    "Big, White, Strong Teeth, Hearty Gums",
  ],
  Lips: [
    "Tight, Thin, Dry Lips Which Chaps Easily",
    "Lips Are Soft, Medium Sized",
    "Lips Are Large, Soft Pink And Full",
  ],
  Nails: [
    "Dry, Plough, Brittle, Break Easily",
    "Sharp, Flexible, Pink, Lustrous",
    "Thick, Oily, Smooth Polished",
  ],
  Appetite: ["Irregular, Scanty", "Strong, Unbearable", "Slow But Steady"],
  "Liking Tastes": [
    "Sweet, Sour, Salty",
    "Sweet, Bitter, Astringent",
    "Pungent, Bitter, Astringent",
  ],
  Thirst: ["High And Non-Persistent", "High And Persistent", "Scanty"],
  Digestion: [
    "Irregular, Forms Gas",
    "Quick, Causes Burning",
    "Prolonged Forms Mucous",
  ],
  Elimination: ["Constipation", "Loose-Thick", "Oily, Sluggish"],
  Sleep: [
    "Scanty, Broken Up, Sleeplessness",
    "Sound, Needs Regular Hours",
    "Deep, Heavy, Prolonged",
  ],
  Speech: [
    "Speaks Fast And Unclear",
    "Precise, Clear To The Point, Sharp",
    "Slow, Gentle, Long Chats, Monotonous",
  ],
  "Physical Activity": ["Hyperactive", "Moderate", "Slow"],
  "Mental Activity": ["Hyperactive", "Moderate", "Slow, Dull"],
  Emotions: [
    "Anxiety, Fear, Uncertainty",
    "Anger, Ambitious, Practical",
    "Calm, Peaceful, Solicitous",
  ],
  Memory: [
    "Quick To Remember And Forget",
    "Average, Clear, Distinct",
    "Slow To Remember And Forget",
  ],
  Faith: ["Variable", "Extremist", "Consistent"],
  Anger: ["Quick And Unstable", "Quick And Sustained", "Always Cool"],
  "Sexual Drive": [
    "Fantasizes Romantic, Quick To Release",
    "Strong Burning Desire, Active And Intense",
    "Slow, Long Enduring, Passionate And Tender",
  ],
  "Temperature And Weather": [
    "Dislike Cold, Windy, Dry Weather, Likes Warmth",
    "Dislike Hot Weather, Prefer Cool, Well-Ventilated Places",
    "Dislike Cool And Damp Weather, Can Tolerate Different Climates",
  ],
  "Lifestyle Orientation": [
    "Fashion Oriented",
    "Business Oriented",
    "Family Oriented",
  ],
  "Way Of Thinking": [
    "Creative, Many Projects At A Time",
    "Organized, One Project At A Time",
    "Follows A Plan Or Idea, Dislikes Change",
  ],
  "Response To Problems": [
    "Worried, Confused, Often Gives Wrong Solution",
    "Agitated, Gives Right And Firm Solution",
    "Calm And Slow, But Gives Right Solution",
  ],
  "Job Preferences": [
    "Creative, Aggressive",
    "Travelling Routine",
    "Challenging, Sedentary",
  ],
  "Fashion Preferences": [
    "Trendy And Versatile",
    "Executive Wear Or Sporty",
    "Casual, Comfortable, Loose Clothing",
  ],
  "Aroma Choice": [
    "Vanilla, Rose, Chamomile, Cinnamon",
    "Sandalwood, Jasmine, Licorice",
    "Lavender, Lemon, Eucalyptus",
  ],
  Concentration: ["Good", "Moderate", "Poor"],
};

export default function Home() {
  const [selections, setSelections] = useState<{ [key: string]: string }>({});
  const [conditionCounts, setConditionCounts] = useState<ConditionCounts>(
    initialConditionCounts
  );
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);

    let newCounts = { ...initialConditionCounts };
    Object.keys(selections).forEach((key) => {
      const value = selections[key];
      const condition = conditionLogic[key][value];
      if (condition) {
        Object.keys(condition).forEach((type) => {
          if (Object.keys(newCounts).includes(type)) {
            newCounts[type as keyof ConditionCounts] += condition[type];
          }
        });
      }
    });

    setConditionCounts(newCounts);

    const v = newCounts.Vatha;
    const p = newCounts.Pitha;
    const k = newCounts.Kapha;

    if (v > 14 && p < 13 && p > k) {
      setResult("Vatha Pitha");
    } else if (v > 14 && k < 13 && k > p) {
      setResult("Vatha Kapha");
    } else if (p > 14 && v < 13 && v > k) {
      setResult("Pitha Vatha");
    } else if (p > 14 && k < 13 && k > v) {
      setResult("Pitha Kapha");
    } else if (k > 14 && p < 13 && p > v) {
      setResult("Kapha Pitha");
    } else if (k > 14 && v < 13 && v > p) {
      setResult("Kapha Vatha");
    } else if (k <= 12 && v == p) {
      setResult("Vatha Pitha");
    } else if (p <= 12 && v == k) {
      setResult("Vatha Kapha");
    } else if (v <= 12 && p == k) {
      setResult("Pitha Kapha");
    } else if (
      (k === 14 && p === 13 && v === 13) ||
      (p === 14 && k === 13 && v === 13) ||
      (v === 14 && p === 13 && k === 13)
    ) {
      setResult("Thridosha");
    } else {
      setResult("Please select all the fields.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setResult("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelections({ ...selections, [name]: value });
  };

  return (
    <div className="container p-5 bg-gray-900 text-white min-h-screen rounded-lg shadow-lg">
      <div>
        <h1 className="font-bold text-2xl text-center">
          Ayurweda Body Constitution
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.keys(options).map((key) => (
            <div key={key} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-lg mb-2">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :
              </p>
              {options[key].map((option, index) => (
                <div
                  key={option}
                  className={`mt-2 ${index % 3 === 0 ? "block" : ""}`}
                >
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={key}
                      value={option}
                      checked={selections[key] === option}
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-white">
                  Form Submission
                </h3>
                <div className="mt-4">
                  <p className="text-gray-300">Condition Counts:</p>
                  <p className="text-white">Vatha: {conditionCounts.Vatha}</p>
                  <p className="text-white">Pitha: {conditionCounts.Pitha}</p>
                  <p className="text-white">Kapha: {conditionCounts.Kapha}</p>
                  <p className="text-white mt-2">Result: {result}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 ">
                <button
                  onClick={closeModal}
                  className="inline-flex  justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
