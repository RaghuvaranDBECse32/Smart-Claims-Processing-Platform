async def evaluate_claim(claim):
    # Simulate AI decisioning logic
    if "accident" in claim.reason.lower():
        return "Approved"
    else:
        return "Pending Review"
