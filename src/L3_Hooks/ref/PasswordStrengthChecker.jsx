import React, { useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';

function PasswordStrengthChecker() {

    const passwordRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [strength, setStrength] = useState({
        score: 0,
        message: 'Enter password',
        color: 'gray'
    });

    const requirements = [
        { regex: /.{8,}/, message: 'At least 8 characters' },
        { regex: /[A-Z]/, message: 'At least one uppercase letter' },
        { regex: /[a-z]/, message: 'At least one lowercase letter' },
        { regex: /[0-9]/, message: 'At least one number' },
        { regex: /[^A-Za-z0-9]/, message: 'At least one special character' }
    ];

    const checkPasswordStrength = () => {
        const password = passwordRef.current.value;
        let score = 0;

        // Calculate score based on requirements met
        requirements.forEach(requirement => {
            if (requirement.regex.test(password)) {
                score++;
            }
        });

        // Update strength message and color based on score
        let strengthInfo = {
            score,
            message: 'Very Weak',
            color: '#ff4444'
        };

        if (score === 5) {
            strengthInfo.message = 'Very Strong';
            strengthInfo.color = '#00C851';
        } else if (score === 4) {
            strengthInfo.message = 'Strong';
            strengthInfo.color = '#00B74A';
        } else if (score === 3) {
            strengthInfo.message = 'Medium';
            strengthInfo.color = '#FFA900';
        } else if (score === 2) {
            strengthInfo.message = 'Weak';
            strengthInfo.color = '#FF7900';
        }

        setStrength(strengthInfo);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        if (passwordRef.current) {
            passwordRef.current.type = isVisible ? 'password' : 'text';
        }
    };

    return (
        <div className="container my-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-4">Password Strength Checker</h5>

                    {/* Password Input Group */}
                    <div className="mb-4">
                        <div className="input-group">
                            <input
                                ref={passwordRef}
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={checkPasswordStrength}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Strength Indicator */}
                        <div className="mt-2">
                            <small style={{ color: strength.color }}>
                                Strength: {strength.message}
                            </small>
                        </div>

                        {/* Progress Bar */}
                        <div className="progress mt-2" style={{ height: '4px' }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${(strength.score / 5) * 100}%`,
                                    backgroundColor: strength.color,
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        </div>
                    </div>

                    {/* Requirements List */}
                    <div className="requirements-list">
                        <h6 className="mb-3">Password Requirements:</h6>
                        {requirements.map((req, index) => {
                            const isMet = req.regex.test(passwordRef.current?.value || '');
                            return (
                                <div
                                    key={index}
                                    className="d-flex align-items-center mb-2"
                                    style={{ color: isMet ? '#00C851' : '#666' }}
                                >
                                    {isMet ? (
                                        <FaCheck className="me-2" />
                                    ) : (
                                        <FaTimes className="me-2" />
                                    )}
                                    <small>{req.message}</small>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Password Strength Tips */}
            {strength.score < 3 && (
                <div className="alert alert-info mt-3">
                    <h6 className="alert-heading">Tips for a stronger password:</h6>
                    <ul className="mb-0">
                        <li>Mix uppercase and lowercase letters</li>
                        <li>Include numbers and special characters</li>
                        <li>Make it at least 8 characters long</li>
                        <li>Avoid common words or phrases</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PasswordStrengthChecker;