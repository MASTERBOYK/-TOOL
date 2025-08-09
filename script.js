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
    const namePlaceholder = "[Your Name]";

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

    if (promptOption === 'standard') {
        // No extra info needed
    } else if (promptOption === 'apology') {
        subject += " - Urgent Apology";
        body = `Dear WhatsApp Support,
I am writing with deep regret regarding the ban on my account, ${phoneNumber}.
I understand I may have unknowingly violated a rule, and I sincerely apologize for any inconvenience caused. I promise this will not happen again and I will be more careful in the future.
Please consider lifting the ban. Thank you.`;
    } else if (promptOption === 'false-ban') {
        subject += " - False Ban Report";
        body = `Dear WhatsApp Support,
My account, ${phoneNumber}, has been banned, but I believe this is a mistake.
I have not engaged in any activities that violate your Terms of Service. I am a regular user and my account was compromised or banned incorrectly.
Please investigate my account and restore it.`;
    } else if (promptOption === 'data-loss') {
        subject += " - Data Loss Concern";
        body = `Hello WhatsApp Support Team,
My number ${phoneNumber} has been banned. I have a lot of important personal and business data on my account.
I am requesting an urgent review of my account. I will be more cautious in the future.
My primary concern is the potential loss of my chats and data. Please help.`;
    }

    body += `\n\nDeveloped by MASTER HACKER.`;

    const mailtoLink = `mailto:support@whatsapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
