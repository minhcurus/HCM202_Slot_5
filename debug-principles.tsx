"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Users, Eye } from "lucide-react";

export default function DebugPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  const principles = [
    {
      id: 1,
      title: "Nguyên tắc 1",
      subtitle: "Test subtitle 1",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      details: {
        detail1: "Chi tiết 1 của nguyên tắc 1",
        detail2: "Chi tiết 2 của nguyên tắc 1"
      }
    },
    {
      id: 2,
      title: "Nguyên tắc 2", 
      subtitle: "Test subtitle 2",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      details: {
        detail1: "Chi tiết 1 của nguyên tắc 2",
        detail2: "Chi tiết 2 của nguyên tắc 2"
      }
    },
    {
      id: 3,
      title: "Nguyên tắc 3",
      subtitle: "Test subtitle 3", 
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      details: {
        detail1: "Chi tiết 1 của nguyên tắc 3",
        detail2: "Chi tiết 2 của nguyên tắc 3"
      }
    }
  ];

  const handleClick = (id: number) => {
    console.log("Clicked:", id, "Current active:", activePrinciple);
    setActivePrinciple(prev => {
      const newValue = prev === id ? null : id;
      console.log("Setting to:", newValue);
      return newValue;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Debug Principles Test</h1>
      <p className="mb-4">Active Principle: {activePrinciple || 'None'}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((principle) => (
          <div key={principle.id} className="border rounded-lg overflow-hidden">
            {/* Card Header */}
            <div 
              className={`bg-gradient-to-r ${principle.color} p-4 cursor-pointer`}
              onClick={() => handleClick(principle.id)}
            >
              <div className="flex items-center gap-2 text-white">
                {principle.icon}
                <h3 className="font-bold">{principle.title}</h3>
              </div>
              <p className="text-white/90 text-sm mt-1">{principle.subtitle}</p>
              
              <div className="flex justify-center mt-2">
                <motion.div
                  animate={{ rotate: activePrinciple === principle.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-white/70" />
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            {activePrinciple === principle.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white overflow-hidden"
              >
                <div className="p-4 space-y-2">
                  {Object.entries(principle.details).map(([key, value]) => (
                    <div key={key} className="flex gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${principle.color} mt-2 flex-shrink-0`}></div>
                      <p className="text-sm text-gray-700">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}