import React, { useState, useEffect } from 'react';
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Emily Williams",
            location: "Edusity, USA",
            text: "Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
            image: user_1
        },
        {
            id: 2,
            name: "William Jackson",
            location: "Edusity, USA",
            text: "The personalized approach to learning at Edusify has transformed my educational journey. The faculty's dedication and innovative teaching methods have helped me achieve goals I never thought possible.",
            image: user_2
        },
        {
            id: 3,
            name: "Sarah Chen",
            location: "Edusity, USA",
            text: "The networking opportunities and career support at Edusify are unmatched. From day one, I felt empowered to pursue my dreams with confidence, knowing I had the full backing of this incredible institution.",
            image: user_3
        },
        {
            id: 4,
            name: "Michael Rodriguez",
            location: "Edusity, USA",
            text: "What sets Edusify apart is their commitment to real-world application. The hands-on experience and industry connections I gained here have been instrumental in launching my successful career.",
            image: user_4
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return (
        <div className="flex items-center justify-center">
            <div className="max-w-5xl w-full bg-white overflow-hidden relative">

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg"
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg"
                >
                    ›
                </button>

          
                <div className="overflow-hidden pb-8">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 px-8"
                            >
                                <div className="flex flex-col items-center text-center max-w-2xl mx-auto shadow-lg pb-5">
                                    {/* Profile Image */}
                                    <div className="w-20 h-20 rounded-full border-4 border-blue-600 overflow-hidden mb-6 shadow-lg">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                                        {testimonial.name}
                                    </h3>

                                    {/* Location */}
                                    <p className="text-gray-500 mb-8 text-lg">
                                        {testimonial.location}
                                    </p>

                                    {/* Testimonial Text */}
                                    <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3 pb-8 mb-5">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 !p-0 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-blue-600 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;