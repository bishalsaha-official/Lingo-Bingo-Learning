import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-base-200 text-base-content">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Empowering you to learn languages efficiently, one word at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Language learning"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              Our mission is to make vocabulary learning fun, simple, and effective.
              Whether you're a beginner or advanced learner, our tools help you
              grow your vocabulary with real-life usage examples, pronunciation, and
              categorized lessons.
            </p>
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Choose a language (e.g., Japanese, Spanish, French)</li>
              <li>Browse categorized vocabulary by difficulty & lesson</li>
              <li>Listen to pronunciations & see real-life usage</li>
              <li>Test yourself using quizzes and flashcards</li>
              <li>Track your progress over time</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
