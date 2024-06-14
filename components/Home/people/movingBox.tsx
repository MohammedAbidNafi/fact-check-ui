"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

interface Fact {
  fact: string;
}

export function MovingBox() {
  const [leftFacts, setLeftFacts] = useState<Fact[]>([]);
  const [rightFacts, setRightFacts] = useState<Fact[]>([]);
  useEffect(() => {
    const getFacts = async () => {
      try {
        const facts = await fetch("http://localhost:8080/facts");

        const factsData: Fact[] = await facts.json();

        if (Array.isArray(factsData) && factsData.length >= 20) {
          const middleIndex = Math.ceil(factsData.length / 2);
          const leftFactsArray = factsData.slice(0, middleIndex);
          const rightFactsArray = factsData.slice(middleIndex);

          setLeftFacts(leftFactsArray);
          setRightFacts(rightFactsArray);
        } else {
          console.error("Invalid data received from server.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getFacts();
  }, []);
  return (
    <div className="h-fit rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-10 md:mt-32">
      <InfiniteMovingCards
        items={rightFacts}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards items={leftFacts} direction="left" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  },
];
