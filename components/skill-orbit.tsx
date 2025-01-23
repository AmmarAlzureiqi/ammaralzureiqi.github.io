"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Skill {
  name: string;
  level: number;
  category: string;
  x?: number;
  y?: number;
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Language" },
  { name: "JavaScript", level: 85, category: "Language" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "AWS", level: 70, category: "Cloud" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Machine Learning", level: 75, category: "Data Science" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "Git", level: 85, category: "Version Control" },
  { name: "TypeScript", level: 70, category: "Language" },
  { name: "Next.js", level: 75, category: "Frontend" },
  { name: "Django", level: 70, category: "Backend" },
];

export function SkillOrbit() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    const svg = d3.select(svgRef.current).attr("width", width).attr("height", height);

    // Clear any existing content
    svg.selectAll("*").remove();

    const simulation = d3
      .forceSimulation(skills)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(centerX, centerY))
      .force("collision", d3.forceCollide().radius((d) => (d as Skill).level / 2));

    const nodes = svg
      .selectAll("g")
      .data(skills)
      .enter()
      .append("g")
      .attr("transform", () => `translate(${centerX},${centerY})`);

    nodes
      .append("circle")
      .attr("r", (d) => d.level / 3)
      .attr("fill", (d) => d3.schemeCategory10[skills.indexOf(d) % 10]);

    nodes
      .append("text")
      .text((d) => d.name)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .style("font-size", "12px");

    simulation.on("tick", () => {
      nodes.attr("transform", (d) => `translate(${(d as Skill).x},${(d as Skill).y})`);
    });

    // Add hover effect
    nodes
      .on("mouseover", function () {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(300)
          .attr("r", (d) => (d as Skill).level / 2);

        d3.select(this)
          .select("text")
          .transition()
          .duration(300)
          .style("font-size", "14px")
          .style("font-weight", "bold");
      })
      .on("mouseout", function () {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(300)
          .attr("r", (d) => (d as Skill).level / 3);

        d3.select(this)
          .select("text")
          .transition()
          .duration(300)
          .style("font-size", "12px")
          .style("font-weight", "normal");
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef}></svg>
    </div>
  );
}
