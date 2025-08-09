document.getElementById('send-request-btn').addEventListener('click', function() {
    const unbanOption = document.getElementById('unban-option').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const promptOption = document.getElementById('prompt-option').value;

    if (!phoneNumber) {
        alert('Please enter your phone number.');
        return;
    }

    let subject = "WhatsApp Account Unban Request";
    let body = "";

    // Base body based on ban type
    if (unbanOption === 'normal') {
        subject += " - Normal Ban Appeal";
        body = `Hello WhatsApp Support Team,
My WhatsApp account with the number ${phoneNumber} has been banned.
I am requesting a review of this decision. I have read and agree to follow all Terms of Service.
Thank you for your time and help.`;
    } else if (unbanOption === 'permanent') {
        subject += " - Permanent Ban Appeal";
        body = `Hello WhatsApp Support Team,
My account, ${phoneNumber}, has been permanently banned.
I apologize for any violation that may have occurred. I have learned from my mistake and promise to abide by all rules in the future.
I kindly request that you reconsider the ban and reactivate my account.`;
    }

    // Add more details based on the new selected prompts
    if (promptOption === 'standard') {
        // No extra info needed, base body is used
    } else if (promptOption === 'mistaken') {
        subject += " - Mistaken Ban Appeal";
        body = `Dear WhatsApp Support,
I believe my account, ${phoneNumber}, was banned by mistake. I have not violated any of your policies.
I am a dedicated user and would appreciate it if you could re-evaluate my account's status.
Thank you for your assistance.`;
    } else if (promptOption === 'policy-promise') {
        subject += " - Policy Compliance Promise";
        body = `Dear WhatsApp Support,
My account, ${phoneNumber}, was banned. I understand that I may have violated your policies.
I sincerely apologize for this and assure you that I have now fully understood all the terms and will strictly comply with them in the future.
Please give me a second chance.`;
    } else if (promptOption === 'review-request') {
        subject += " - Account Review Request";
        body = `Dear WhatsApp Support,
My account with the number ${phoneNumber} has been banned.
I am requesting an immediate review of my account. I have been using WhatsApp for a long time and would like to continue using it responsibly.
Thank you.`;
    } else if (promptOption === 'terms-violation') {
        subject += " - Terms Violation Appeal";
        body = `Dear WhatsApp Support,
My account, ${phoneNumber}, was banned due to a terms of service violation.
I am deeply sorry for my actions. I promise to be a responsible user and follow all guidelines without fail.
I humbly request that you reinstate my account.`;
    } else if (promptOption === 'final-chance') {
        subject += " - Final Chance Request";
        body = `Dear WhatsApp Support,
My account, ${phoneNumber}, has been banned. I understand the seriousness of this issue.
I am appealing for a final chance. I promise to use the service in full compliance with your policies.
Please consider this request. Thank you.`;
    }

    // Concluding line
    body += `\n\nDeveloped by MASTER HACKER.`;

    const mailtoLink = `mailto:support@whatsapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
