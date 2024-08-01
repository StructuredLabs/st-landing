import MarkdownRenderer from "../ui/markdown-renderer";

const content = `
# Structured Labs, Inc. Terms of Service

Last Updated: November 12, 2023

If you signed a separate Cover Page to access the Product with the same account, and that agreement has not ended, the terms below do not apply to you. Instead, your separate Cover Page applies to your use of the Product.

This Agreement is between Structured Labs, Inc. and the company or person accessing or using the Product. This Agreement consists of: (1) the Order Form and (2) the Key Terms, both of which are on the Cover Page below, and (3) the Common Paper Cloud Service Agreement Standard Terms Version 1.0 ("Standard Terms"). Any modifications to the Standard Terms made in the Cover Page will control over conflicts with the Standard Terms. Capitalized words have the meanings or descriptions given in the Cover Page or the Standard Terms.

If you are accessing or using the Product on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company. By signing up, accessing, or using the Product, Customer indicates its acceptance of this Agreement and agrees to be bound by the terms and conditions of this Agreement.

## Cover Page

### Order Form

- **Cloud Service:** Structured offers a cloud-based API development platform that translates natural language descriptions into live, secure, and scalable API endpoints, democratizing backend creation for non-technical innovators and streamlining the development process.
- **Subscription Start Date:** The Effective Date
- **Subscription Period:** 1 month(s)
- **Non-Renewal Notice Period:** At least 30 days before the end of the current Subscription Period.
- **Cloud Service Fees:** Section 5.2 of the Standard Terms is replaced with: Certain parts of the Product have different pricing plans, which are available at Provider's pricing page (https://structuredlabs.com/pricing). Within the Payment Period, Customer will pay Provider fees based on the Product tier selected at the time of account creation and Customer's usage per Subscription Period. Provider may update Product pricing by giving at least 30 days notice to Customer (including by email or notification within the Product), and the change will apply in the next Subscription Period.
- **Payment Period:** 5 day(s) from the last day of the Subscription Period
- **Invoice Period:** Monthly

### Key Terms

- **Customer:** The company or person who accesses or uses the Product. If the person accepting this Agreement is doing so on behalf of a company, all use of the word "Customer" in the Agreement will mean that company.
- **Provider:** Structured Labs, Inc.
- **Effective Date:** The date Customer first accepts this Agreement.

#### Covered Claims:

- **Provider Covered Claims:** Any action, proceeding, or claim that the Cloud Service, when used by Customer according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights.
- **Customer Covered Claims:** Any action, proceeding, or claim that (1) the Customer Content, when used according to the terms of the Agreement, violates, misappropriates, or otherwise infringes upon anyone else's intellectual property or other proprietary rights; or (2) results from Customer's breach or alleged breach of Section 2.1 (Restrictions on Customer).

- **General Cap Amount:** The fees paid or payable by Customer to provider in the 12 month period immediately before the claim
- **Governing Law:** The laws of the State of Delaware
- **Chosen Courts:** The state or federal courts located in Delaware

#### Notice Address:

- **For Provider:** notices@structuredlabs.com
- **For Customer:** The main email address on Customer's account`

export default function Content() {
    return (
        <MarkdownRenderer content={content} />
    );
}

