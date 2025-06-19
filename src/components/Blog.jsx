import React, { useState } from "react";

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "🛡️ CyberIQ: AI-Powered Security for the Internet of Things",
      date: "Published: 2024-2025",
      summary: "As part of my final year project, I developed CyberIQ, a smart cybersecurity solution designed to protect IoT environments using AI-powered incident detection and automated response.",
      content: [
        "As part of my final year project, I developed CyberIQ, a smart cybersecurity solution designed to protect IoT environments using AI-powered incident detection and automated response.",
        "In a world where connected devices are everywhere—and often vulnerable—CyberIQ aims to bring intelligence and automation to threat management. The platform integrates powerful tools like Wazuh, Shuffle, TheHive, Cortex, and MISP to create a seamless, automated workflow for detecting, analyzing, and responding to security incidents.",
        "What sets CyberIQ apart is its AI layer, designed to reduce false positives and help security teams focus on real threats. I trained a machine learning model on a large and diverse dataset to classify alerts based on their criticality, behavior patterns, and context.",
        "To simulate real-world attacks, I built a virtual lab with IoT protocols (like MQTT), deployed vulnerable devices, and generated malicious traffic to test the platform's performance. The results showed strong detection capabilities, effective automation through Shuffle workflows, and a flexible, modular architecture that can be adapted for real deployments.",
        "This project reflects my passion for cybersecurity, AI, and system design—and it marks a major step in my journey as a software engineer. Stay tuned for more in-depth articles, where I'll break down each component of the platform and share key lessons I learned while building CyberIQ."
      ]
    }
  ];

  const toggleExpand = (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null); // Collapse if already expanded
    } else {
      setExpandedPost(postId); // Expand the clicked post
    }
  };
  return (
    <div className="blog-container">
      <h1 className="blog-title">My Journal</h1>
      
      {blogPosts.map(post => (
        <div className="blog-post" key={post.id}>
          <div className="blog-post-header">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
          </div>
            <div className="blog-content">
            {expandedPost === post.id ? (
              // Show full content when expanded
              post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              // Show only summary when collapsed
              <p>{post.summary}</p>
            )}
            
            <div className="see-more-wrapper">
              <button 
                className="see-more-button" 
                onClick={() => toggleExpand(post.id)}
              >
                {expandedPost === post.id ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
