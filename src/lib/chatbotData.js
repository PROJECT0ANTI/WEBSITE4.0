// src/lib/chatbotData.js

export const chatbotData = {
  // General Q&A pairs - SHORT, conversational, friendly
  general_question: {
    "Hii": "Hey there! 👋 How can I help?",
    "Hello": "Hello! 👋 What can I do for you?",
    "Hi": "Hi! 👋 What's on your mind?",
    "human": "I'm an AI assistant created by Anti AI. Not human, but here to help! 🤖",
    "robot": "I'm an intelligent assistant built by Anti AI to answer your questions.",
    "age": "I don't have an age - I'm an AI! 🤖 But I was created by Anti AI.",
    "date": `Today is ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    "motto": "अन्ते सत्यं विजयते। (Truth Prevails in the End) 💪",
    "founder": "Anti AI was founded by Tanishq Sharma 👨‍💼",
    "vision mission": "Our mission: Ensure AGI threats are mitigated and humanity benefits from AI safely. 🛡️",
    "contact connect with us": "📞 Call: +91 91166-65513\n📧 Email: support@antiai.ltd",
    "founded started": "We started our journey in 2024 🚀",
    "team size or total members": "We have an awesome team of 9 talented people 👥",
    "company located situated location address": "📍 52/210, Padmani VT Rd, Mansarovar, Jaipur, Rajasthan 302020",
    "About Anti": "AntiAI is an AI research company focused on making artificial intelligence safe for humanity. We develop intelligent solutions to protect against AGI risks. 🛡️",
  },

  // Service descriptions - SHORT, conversational, WITH EMOJIS
  /*response: {
    "AI Services": "🛡️ Our AI Services provide advanced protection for your digital assets. We use machine learning to detect and prevent cyber threats in real-time.",
    
    "Real-time Threat Detection": "🔍 We monitor your systems 24/7 to catch suspicious activity before it causes damage. Our ML algorithms work silently in the background.",
    
    "Automated Incident Response": "⚡ When threats are detected, our system automatically isolates affected systems and starts recovery. Fast, automated, effective.",
    
    "Machine Learning-based Anomaly Detection": "🧠 Our AI learns from your data to spot unusual patterns. The more it sees, the smarter it gets at detecting threats.",
    
    "Compliance and Risk Management": "📋 We help you stay compliant with GDPR, HIPAA, and PCI DSS standards. No more compliance headaches.",
    
    "Security Analytics and Reporting": "📊 Get detailed insights into your security posture with custom dashboards and reports. Data-driven decisions made easy.",
    
    "Web Services": "💻 We build robust, scalable web applications tailored to your business needs. From concept to deployment, we got you covered.",
    
    "Custom Application Development": "🔨 Our experienced developers build custom web applications that solve your unique business challenges.",
    
    "Content Management System (CMS)": "📝 We build custom CMS solutions that make managing your website content easy and intuitive.",
    
    "Ecommerce Development": "🛒 Build and manage your online store with our custom ecommerce solutions. Secure, scalable, and ready to grow.",
    
    "MEAN Stack Development": "📚 We develop scalable applications using MongoDB, Express, Angular, and Node.js.",
    
    "MERN Stack Development": "⚛️ Modern, responsive web apps using MongoDB, Express, React, and Node.js.",
    
    "Social Media Apps": "📱 We create custom social media platforms that help you engage with your audience and build your brand.",
    
    "DevOps Services": "🚀⚡ Our DevOps services help streamline software development and deployment. Faster releases, better quality.",
    
    "Continuous Integration/Continuous Deployment (CICD)": "🔄 Automate your development and deployment processes. Ship code faster and more reliably.",
    
    "Infrastructure as Code (IaC)": "🏗️ Manage your infrastructure as code with Terraform, Ansible, and Chef. Consistency and reproducibility guaranteed.",
    
    "Configuration Management": "⚙️ Automated configuration management ensures your systems are always configured correctly and up-to-date.",
    
    "DevOps Consulting and Implementation": "📈 We design and implement DevOps strategies aligned with your business goals.",
    
    "Our Projects or products": "🎵 ANTI.Q - Our flagship music player\n🛡️ ANTI.0 - Robust protection against AI-driven threats\n🧠 ANTI.1 - Innovative AI capabilities for the future",
  },*/

  response: {"AI Services":"AI Services : Advanced Protection for Your Digital AssetsIn today's digital age, protecting your data and systems from cyber threats is more criticalthan ever. Our AI Security services provide advanced protection for your digital assets,utilizing cutting-edge machine learning algorithms to detect and prevent cyber threats inreal-time.\n\n",
              "Real-time Threat Detection":"Real-time Threat Detection: Our AI-powered security systems monitor your digital assets 24/7, detecting potential threats in real-time. By analyzing patterns and anomalies in network traffic, user behavior, and system logs, our machine learning algorithms can identify and alert you to potential security breaches before they cause damage. This proactive approach to security ensures that your data and systems remain secure, even in the face of sophisticated cyber threats.",
              "Automated Incident Response":"Automated Incident Response: In the event of a security breach, our AI-driven incident response system kicks into action, automatically isolating affected systems, containing the threat, and initiating recovery procedures. This rapid response minimizes the impact of security incidents, reducing downtime and preventing data loss. Our automated incident response system is customizable, allowing you to tailor the response to your specific needs and requirements.",
              "Machine Learning-based Anomaly Detection":"Machine Learning-based Anomaly Detection: Our AI security services leverage advanced machine learning algorithms to identify unusual patterns and anomalies in your digital environment. By continuously learning from your data, our system can adapt to new threats and evolving attack patterns, ensuring that your security measures remain effective over time. This adaptive approach to security ensures that your digital assets are protected against even the most sophisticated cyber threats.",
              "Compliance and Risk Management":"Compliance and Risk Management: Our AI security services help you maintain compliance with industry regulations and standards, such as GDPR, HIPAA, and PCI DSS. By continuously monitoring your digital environment for potential compliance issues, our system can alert you to potential risks and help you take corrective action before they become a problem. Our compliance and risk management services also include regular security audits and assessments, ensuring that your security measures remain up-to-date and effective.",
              "Security Analytics and Reporting":"Security Analytics and Reporting: Our AI security services provide detailed analytics and reporting, giving you insights into your security posture and helping you make informed decisions about your security strategy. Our customizable dashboards and reports allow you to track key security metrics, identify trends, and monitor your security performance over time. This data-driven approach to security ensures that you have the information you need to make informed decisions about your security strategy.",
              "Web Services":"Web Services: Custom Solutions for Your Business Needs Our Web Development services offer end-to-end solutions for building robust, scalable, and user-friendly websites and applications.\n\n",
              "Custom Application Development":"Custom Application Development: Our team of experienced developers can build custom web applications tailored to your business needs. From concept to deployment, we work closely with you to ensure that your application meets your requirements and exceeds your expectations. Our custom application development services include requirements gathering, design, development, testing, and deployment.",
              "Content Management System (CMS)":"Content Management System (CMS): We specialize in building custom CMS solutions that allow you to manage your website's content with ease. Our CMS solutions are user-friendly, scalable, and customizable, ensuring that you have the tools you need to manage your website effectively. Our CMS solutions include popular platforms such as WordPress, Drupal, and Joomla, as well as custom-built solutions tailored to your specific needs",
              "Ecommerce Development:":"Ecommerce Development: Our Ecommerce development services help you build and manage your online store, from product catalog management to payment processing and order fulfillment. We specialize in building custom Ecommerce solutions that are tailored to your business needs, ensuring that your online store is user-friendly, secure, and scalable. Our Ecommerce development services include popular platforms such as Shopify, Magento, and WooCommerce, as well as custom-built solutions.",
              "MEAN Stack Development":"MEAN Stack Development: Our team of experienced developers can build custom web applications using the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js). This powerful combination of technologies allows us to build scalable, high-performance web applications that meet your business needs. Our MEAN stack development services include requirements gathering, design, development, testing, and deployment",
              "MERN Stack Development":"MERN Stack Development: Our team of experienced developers can also build custom web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This popular combination of technologies allows us to build modern, responsive web applications that are tailored to your business needs. Our MERN stack development services include requirements gathering, design, development, testing, and deployment.",
              "Social Media Apps":"Social Media Apps: Our team can build custom social media applications that allow you to engage with your audience and build your brand. From social networking platforms to messaging apps, we can help you build a social media presence that meets your business needs. Our social media app development services include requirements gathering, design, development, testing, and deployment",
              "DevOps Services":"DevOps Services: Streamlining Software Development and Deployment Our DevOps services help organizations streamline their software development and deployment processes.",
              "Continuous Integration/Continuous Deployment ( CICD )":"Continuous Integration/Continuous Deployment ( CICD ): Our CI/CD services help you automate your software development and deployment processes, reducing time-to-market and improving software quality. By continuously integrating and deploying code changes, our system ensures that your software is always up-to-date and ready for release. Our CI/CD services include popular tools such as Jenkins, Travis CI, and CircleCI",
              "Infrastructure as Code (IaC)":"Infrastructure as Code (IaC): Our IaC services help you manage your infrastructure as code, allowing you to automate infrastructure provisioning, configuration, and management. By treating your infrastructure as code, you can ensure consistency, reproducibility, and scalability across your environment. Our IaC services include popular tools such as Terraform, Ansible, and Chef",
              "Configuration Management":"Configuration Managemen: Our configuration management services help you manage your software and infrastructure configurations, ensuring consistency and reproducibility across your environment. By automating configuration management, you can reduce errors, improve efficiency, and ensure that your systems are always up-to-date. Our configuration management services include popular tools such as Puppet, Chef, and Ansible",
              "\n\nDevOps Consulting and Implementation":"DevOps Consulting and Implementation: Our DevOps consulting and implementation services help you design and implement a DevOps strategy that meets your business needs. From assessing your current processes to designing and implementing a custom DevOps solution, we work closely with you to ensure that your DevOps strategy is effective, efficient, and aligned with your business goals. Our DevOps consulting and implementation services include requirements gathering, design, implementation, training, and support.",
              "About Anti ":"AntiAI is an AI research and development company. Our mission is to ensure that the threat from artificial general intelligence are mitigated even before they arise.\n\nWe believe that humanity should benefit from AI, and we're developing our own first-in-class Anti AI software to ensure safe usage.We are building safe and smart solutions against AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome.\n",
              "Our Projects or products":"Our Projects:\nANTI.Q- Music Player\nANTI.0 :\toffers robust protection against AI-driven intrusions\nANTI.1 :\tredefine AI capabilities by offering innovative features and functionalities",
             "company located situated location address":" Address: 52/210, Padmani VT Rd, Ward 27, Mansarovar Sector 5, Mansarovar, Jaipur, Rajasthan 302020"    ,
  },

  // Keyword weights for priority matching (higher = higher priority)
  weights: {
    "ai": 2,
    "web": 2,
    "devops": 2,
    "founded": 2,
    "founder": 2,
    "owner": 2,
    "Anti": 10,
    "AntiAI": 10,
    "located": 4,
    "situated": 2,
    "address": 4,
    "service": 1,
  },

  // Job response
  jobs: ["🎯 Check out our careers page for open positions and opportunities!"],

  // Words that indicate user wants to quit
  negative_response: ["bye", "later", "quit", "exit", "end"],
};
