
let points = 0;
let completed = false;

const challenges = {
  walking: {
    bored: "Take a refreshing walk. Notice five things around you that you have never paid attention to before.",
    stressed: "Walk slowly in a peaceful, familiar place. Notice the trees, sky, and sounds around you.",
    happy: "Take a cheerful walk and discover a new detail in your surroundings.",
    energetic: "Go for a brisk walk on a safe path and explore the nature around you."
  },

  gardening: {
    bored: "Spend time caring for a plant. Water it if needed and observe its new leaves.",
    stressed: "Care for a plant and enjoy a few quiet moments surrounded by greenery.",
    happy: "Plant a seed or care for your favourite plant and watch it grow.",
    energetic: "Clean a small garden area and help your plants thrive."
  },

  birds: {
    bored: "Find a comfortable place and observe birds from a distance. Notice their colours and sounds.",
    stressed: "Sit somewhere peaceful and listen to the birds without rushing.",
    happy: "Try to spot three different kinds of birds without disturbing them.",
    energetic: "Explore a safe outdoor area and see how many different bird calls you can hear."
  },

  photography: {
    bored: "Find three interesting patterns in leaves, flowers, or clouds. Capture them with your camera.",
    stressed: "Take a slow walk and photograph something in nature that you find peaceful.",
    happy: "Capture five beautiful natural details around you.",
    energetic: "Go on a mini photo adventure and look for interesting colours and textures."
  },

  exploring: {
    bored: "Explore a familiar outdoor place and discover three things you usually overlook.",
    stressed: "Spend a few quiet minutes outside and notice the breeze, plants, and sky.",
    happy: "Look for different leaf shapes and interesting natural textures.",
    energetic: "Go on a nature treasure hunt and find five different natural objects without picking or disturbing them."
  }
};

function generateChallenge() {
  const mood = document.getElementById("mood").value;
  const activity = document.getElementById("activity").value;
  const duration = document.getElementById("duration").value;

  const result = document.getElementById("result");

  completed = false;
  document.getElementById("success").hidden = true;
  document.getElementById("completeBtn").disabled = false;
  document.getElementById("completeBtn").textContent =
    "✅ I Completed It!";

  document.getElementById("challengeTitle").textContent =
    "Your Nature Mission 🌿";

  document.getElementById("challengeText").textContent =
    challenges[activity][mood];

  document.getElementById("challengeTime").textContent =
    "⏱ Time: " + duration + " minutes";

  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function completeChallenge() {
  if (completed) return;

  completed = true;
  points += 10;

  document.getElementById("points").textContent = points;
  document.getElementById("success").hidden = false;
  document.getElementById("completeBtn").disabled = true;
  document.getElementById("completeBtn").textContent =
    "✓ Mission Completed!";
}