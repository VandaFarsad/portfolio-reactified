export const iconData = [
  {
      "iconSetPrefix": "logos",
      "iconName": "python",
      "text": "Python",
  },
  {
      "iconSetPrefix": "skill-icons",
      "iconName": "django",
      "text": "Django",
  },
  {
      "iconSetPrefix": "skill-icons",
      "iconName": "docker",
      "text": "Docker",
  },
  {
      "iconSetPrefix": "logos",
      "iconName": "kubernetes",
      "text": "Kubernetes",
  },
  {
      "iconSetPrefix": "logos",
      "iconName": "gitlab",
      "text": "Gitlab",
  },
  {
      "iconSetPrefix": "skill-icons",
      "iconName": "typescript",
      "text": "TypeScript",
  },
  {
      "iconSetPrefix": "devicon",
      "iconName": "nextjs",
      "text": "Next.js",
  },
  {
      "iconSetPrefix": "logos",
      "iconName": "react",
      "text": "React.js",
  }
]

export const iconDataTailwind = iconData.map((item) => ({
  ...item,
  icon: "lg:h-20 lg:w-20 md:h-14 md:w-14 h-10 w-10 icon-[" + item.iconSetPrefix + "--" + item.iconName + "]",
}));