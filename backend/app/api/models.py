from pydantic import BaseModel

class Claim(BaseModel):
    name: str
    policy_number: str
    claim_amount: float
    reason: str

class ClaimResponse(BaseModel):
    id: str
    status: str
