import "./styles/main.css";

import { renderPortfolio } from "./components/App.js";
import { portfolioData } from "./data/portfolio.js";
import { initInteractions } from "./features/interactions.js";

renderPortfolio(portfolioData);
initInteractions();
