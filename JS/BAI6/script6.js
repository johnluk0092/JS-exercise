function mailsome() {
    const who = prompt("Enter recipient's email address:", "antispammer@earthing.net");
    if (who === null) return;
    
    const what = prompt("Enter the subject:", "none");
    if (what === null) return;
    
    if (confirm(`Are you sure you want to mail ${who} with the subject of ${what}?`)) {
        parent.location.href = `mailto:${who}?subject=${what}`;
    }
}