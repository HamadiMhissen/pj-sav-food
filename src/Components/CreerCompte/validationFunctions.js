export function validatePrenomOuNom(prenom) {
  //if (prenom.length < 4 && prenom !== "") return "Trop court !";
  if (/\d+/g.test(prenom)) return "ne peut pas contenir des nombres !";
  else if (prenom.length > 12) return "Trop long !";
  else return null;
}

export function validateEmail(email) {
  if (!email.includes("@") && email.length > 14)
    return "Format d'e-mail invalide !";
  else return null;
}
export function validateTel(telephone) {
  if (telephone.length > 10) return "Numéro de téléphone invalide !";
  else return null;
}
export function validateJour(jour) {
  const jourEnChiffres = parseInt(jour);
  if (jourEnChiffres > 30 || jour.length > 2) return "jour invalide !";
  else return null;
}
export function validateMois(mois) {
  const moisEnChiffres = parseInt(mois);
  if (moisEnChiffres > 12 || mois.length > 2) return "mois invalide !";
  else return null;
}
export function validateAnnee(annee) {
  const anneeEnChiffres = parseInt(annee);
  if (anneeEnChiffres > 2003 || anneeEnChiffres < 1900 || annee.length > 4)
    return "année invalide !";
  else return null;
}
export function validatePerson(
  prenom,
  nom,
  email,
  portable,
  fixe,
  jj,
  mm,
  yyyy
) {
  if (
    !(
      validatePrenomOuNom(prenom) ||
      validatePrenomOuNom(nom) ||
      validateEmail(email) ||
      validateTel(portable) ||
      validateTel(fixe) ||
      validateJour(jj) ||
      validateMois(mm) ||
      validateAnnee(yyyy)
    )
  )
    return true;
}
export function isEmptyPerson(prenom, nom, email, portable, jj, mm, yyyy) {
  if (!(prenom && nom && email && portable && jj && mm && yyyy)) return true;
}
