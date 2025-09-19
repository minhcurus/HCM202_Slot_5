import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content", "slot5.md");

export async function getAvailablePersons(): Promise<string[]> {
  try {
    // Return in the correct order: Minh → Nhân → Vinh → Bảo → Hưng
    const orderedPersons = ["minh", "nhan", "vinh", "bao", "hung"];
    const content = fs.readFileSync(CONTENT_PATH, "utf8");
    const availablePersons = [];
    
    // Check each person in order
    for (const person of orderedPersons) {
      if (person === "minh" && content.includes("Minh:")) availablePersons.push("minh");
      else if (person === "nhan" && content.includes("Nhân:")) availablePersons.push("nhan");
      else if (person === "vinh" && content.includes("Vinh:")) availablePersons.push("vinh");
      else if (person === "bao" && content.includes("Bảo")) availablePersons.push("bao");
      else if (person === "hung" && content.includes("Hưng:")) availablePersons.push("hung");
    }
    
    return availablePersons;
  } catch {
    return [];
  }
}

export async function getCommon(): Promise<string> {
  try {
    const content = fs.readFileSync(CONTENT_PATH, "utf8");
    const firstPersonMatch = content.match(/^(Minh:|Bảo|Hưng:|Vinh:|Nhân:)/m);
    
    if (firstPersonMatch) {
      return content.substring(0, firstPersonMatch.index || 0).trim();
    }
    
    return content.trim();
  } catch {
    return "Chào mừng đến với Chuyên đề Slot 5!";
  }
}

export async function getPersonContent(person: string): Promise<string> {
  try {
    const content = fs.readFileSync(CONTENT_PATH, "utf8");
    const lines = content.split('\n');
    
    // Find the start line for each person's section
    const personStartPatterns = {
      minh: /^##\s*\*\*Minh:/,
      bao: /^##\s*\*\*Bảo\s*:\s*/,
      hung: /^##\s*\*\*Hưng:/,
      vinh: /^##\s*\*\*Vinh:/,
      nhan: /^##\s*\*\*Nhân:/
    };
    
    const startPattern = personStartPatterns[person as keyof typeof personStartPatterns];
    if (!startPattern) return "";
    
    // Find start line
    let startLine = -1;
    for (let i = 0; i < lines.length; i++) {
      if (startPattern.test(lines[i])) {
        startLine = i;
        break;
      }
    }
    
    if (startLine === -1) return "";
    
    // Find end line (next person's title or end of file)
    let endLine = lines.length;
    const nextPersonPattern = /^##\s*\*\*(?:Minh:|Bảo\s*:\s*|Hưng:|Vinh:|Nhân:)/;
    
    for (let i = startLine + 1; i < lines.length; i++) {
      if (nextPersonPattern.test(lines[i])) {
        endLine = i;
        break;
      }
    }
    
    // Extract and clean the content
    const personContent = lines.slice(startLine, endLine).join('\n').trim();
    return personContent;
    
  } catch {
    return `Không thể tải nội dung của ${person}.`;
  }
}