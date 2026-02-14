import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Brand = {
    name : Text;
    description : Text;
    website : Text;
    contactEmail : Text;
  };

  type Creator = {
    name : Text;
    bio : Text;
    portfolio : Text;
    contactEmail : Text;
  };

  type SubmissionType = {
    #brand;
    #creator;
  };

  type Submission = {
    submissionType : SubmissionType;
    timestamp : Time.Time;
    brand : ?Brand;
    creator : ?Creator;
  };

  let submissions = Map.empty<Text, Submission>();

  public type BrandForm = {
    name : Text;
    description : Text;
    website : Text;
    contactEmail : Text;
  };

  public type CreatorForm = {
    name : Text;
    bio : Text;
    portfolio : Text;
    contactEmail : Text;
  };

  public shared ({ caller }) func submitBrand(form : BrandForm) : async Text {
    let brand : Brand = {
      name = form.name;
      description = form.description;
      website = form.website;
      contactEmail = form.contactEmail;
    };

    let submission : Submission = {
      submissionType = #brand;
      timestamp = Time.now();
      brand = ?brand;
      creator = null;
    };

    submissions.add(form.contactEmail, submission);
    "Brand submitted successfully";
  };

  public shared ({ caller }) func submitCreator(form : CreatorForm) : async Text {
    let creator : Creator = {
      name = form.name;
      bio = form.bio;
      portfolio = form.portfolio;
      contactEmail = form.contactEmail;
    };

    let submission : Submission = {
      submissionType = #creator;
      timestamp = Time.now();
      brand = null;
      creator = ?creator;
    };

    submissions.add(form.contactEmail, submission);
    "Creator submitted successfully";
  };

  public query ({ caller }) func getSubmission(email : Text) : async Submission {
    switch (submissions.get(email)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };
};
