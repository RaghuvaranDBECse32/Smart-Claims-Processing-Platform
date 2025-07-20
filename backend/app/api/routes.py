from fastapi import APIRouter, HTTPException
from app.api.models import Claim, ClaimResponse
from app.api.database import db
from app.ai.evaluator import evaluate_claim

router = APIRouter()

@router.post("/submit-claim", response_model=ClaimResponse)
async def submit_claim(claim: Claim):
    decision = await evaluate_claim(claim)
    claim_dict = claim.dict()
    claim_dict['status'] = decision
    result = await db.claims.insert_one(claim_dict)
    return {"id": str(result.inserted_id), "status": decision}
