import Time "mo:core/Time";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestampDescending(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      if (a.timestamp > b.timestamp) { #less } else if (a.timestamp < b.timestamp) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray().sort(ContactSubmission.compareByTimestampDescending);
  };
};
