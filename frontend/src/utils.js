
export function categorizeStudentsByGrade(students) {
    const gradeBins = Array(10).fill(0);

  for (const student of students) {
    let binIndex = Math.floor(student.grade / 10);
    if (binIndex >= 10) {
      binIndex = 9;
    }
    gradeBins[binIndex]++;
  }

  const result = gradeBins.map((count, index) => {
    let binStart = index * 10;
    let binEnd = binStart + 9;
    if (index === 9) {
      binEnd = 100;
    }
    return { bin: `${binStart}-${binEnd}`, count };
  });

  return result;
}


export function categorizeStudentsByAge(students) {
    const ageBins = new Map();
    ageBins.set("0-17", 0);
    ageBins.set("18-24", 0);
    ageBins.set("25-30", 0)
    ageBins.set("31+", 0);

    const now = new Date();

    for (const student of students) {
        const dob = new Date(student.StudentDOB);
        const age = now.getFullYear() - dob.getFullYear();
        if (age <= 17) {
            ageBins.set("0-17", ageBins.get("0-17") + 1);
        } else if (age <= 24) {
            ageBins.set("18-24", ageBins.get("18-24") + 1);
        } else if (age <= 30) {
            ageBins.set("25-30", ageBins.get("25-30") + 1);
        } else {
            ageBins.set("31+", ageBins.get("31+") + 1);
        }
    }
    // const ageBins = new Map([
    //     ["18-23", 0],
    //     ["23-28", 0],
    //     ["28-32", 0],
    //     ["32-36", 0],
    //     ["36-40", 0],
    //     ["40-45", 0],
    //     ["other", 0],
    // ]);

    // const today = new Date();
    // const currentYear = today.getFullYear();

    // for (const student of students) {
    //     const studentDOB = new Date(student.StudentDOB);
    //     const age = currentYear - studentDOB.getFullYear();
    //     const bin = age >= 18 && age <= 23 ? "18-23"
    //         : age <= 28 ? "23-28"
    //         : age <= 32 ? "28-32"
    //         : age <= 36 ? "32-36"
    //         : age <= 40 ? "36-40"
    //         : age <= 45 ? "40-45"
    //         : "other";

    //     ageBins.set(bin, ageBins.get(bin) + 1);
    // }
    console.log(Array.from(ageBins, ([name, value]) => ({ name, value })));
    return Array.from(ageBins, ([name, value]) => ({ name, value }));
}

export function categorizeStudentsByGender(students) {
    let maleCount = 0;
    let femaleCount = 0;

    for (const student of students) {
        if (student.Gender === "M") 
            maleCount++;
        
            else if (student.Gender === "F") 
        femaleCount++;
    }

    return [{"name": "M", "value": maleCount}, {"name": "F", "value": femaleCount}];
}


export function getAverageGrade(students) {
    let gradeSum = 0;

    for (const student of students) {
        gradeSum += student.grade;
    }

    return (gradeSum / students.length).toFixed(2);
}

export function getMinGrade(students) {
    let minGrade = 100;
    console.log(students)
    for (const student of students) {
        if (student.grade < minGrade) 
            minGrade = student.grade || 0;
    }
    console.log(minGrade)
    return minGrade;
}

export function getMaxGrade(students) {
    let maxGrade = 0;
    console.log(students)
    for (const student of students) {
        if (student.grade > maxGrade) 
            maxGrade = student.grade;
    }
    return maxGrade;
}